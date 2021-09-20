<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Register user 
     */
    public function register(Request $request) 
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email:unique,users,email',
            'password' => 'required|string|confirmed'
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt($fields['password'])
        ]);

        $token = $user->createToken('tcommerce')->plainTextToken;

        return response([
            'user' => $user,
            'access_token' => $token 
        ], 201);
    }

    /**
     * Perform API user login
     */
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required:email',
            'password' => 'required:string'
        ]);

        $user = User::where('email', $fields['email'])->first();
        

        if (!Auth::attempt($fields)) {
            return response('Bad credentials provided', 401);
        }

        $token = $user->createToken('my-token')->plainTextToken;

        return response([
            'access_token ' => $token,
            'user' => $user
        ], 200);
    }

    /**
     * Perform API logout
     */
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Logged out'
        ];
    }

    public function me(Request $request)
    {
        return response([
           'user' => $request->user(),
        ]);
    }

    public function loginedDevices()
    {
        $devices = \DB::table('sessions')
                ->where('user_id', \Auth::user()->id)
                ->get()->reverse();

                return view('logged-in-devices.list')
                ->with('devices', $devices)
                ->with('current_session_id', \Session::getId());
    }

}
