<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Models\UserSocial;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Two\InvalidStateException;
use Tymon\JWTAuth\JWTAuth;

class SocialAuthController extends Controller
{
    protected $auth;

    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
        $this->middleware(['social', 'web']);
    }

    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            $serviceUser = Socialite::driver($provider)->user();
        } catch (\Exception $e) {
            return redirect(env('CLIENT_BASE_URL') . '/auth/social-callback?error=Unable to login using ' . $provider . '. Please try again' . '&origin=login');
        }

        if ((env('RETRIEVE_UNVERIFIED_SOCIAL_EMAIL') == 0) && ($provider != 'google')) {
            $email = $serviceUser->getId() . '@' . $provider . '.local';
        } else {
            $email = $serviceUser->getEmail();
        }

        $user = $this->getExistingUser($serviceUser, $email, $provider);
        $newUser = false;
        if (!$user) {
            $newUser = true;
            $user = User::create([
                'name' => $serviceUser->getName(),
                'email' => $email,
                'password' => ''
            ]);
        }

        if ($this->needsToCreateSocial($user, $provider)) {
            UserSocial::create([
                'user_id' => $user->id,
                'social_id' => $serviceUser->getId(),
                'service' => $provider
            ]);
        }

        return redirect(env('CLIENT_BASE_URL') . '/auth/social-callback?token=' . $this->auth->fromUser($user) . '&origin=' . ($newUser ? 'register' : 'login'));
    }

    public function needsToCreateSocial(User $user, $provider)
    {
        return !$user->hasSocialLinked($provider);
    }

    public function getExistingUser($serviceUser, $email, $provider)
    {
        if ((env('RETRIEVE_UNVERIFIED_SOCIAL_EMAIL') == 0) && ($provider != 'google')) {
            $socialAccount = UserSocial::where('social_id', $serviceUser->getId())->first();
            
            return $socialAccount ? $socialAccount->user : null;
        }
        return User::where('email', $email)->orWhereHas('social', function($q) use ($serviceUser, $provider) {
            $q->where('social_id', $serviceUser->getId())->where('service', $provider);

        })->first();
    }
}
