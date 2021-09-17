<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\v1\AuthController;
use App\Http\Controllers\Api\v1\SocialAuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public api routes
Route::prefix('v1')->middleware(['throttle:20,5'])->group( function() {
    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    Route::get('/auth/login/{provider}', [SocialAuthController::class, 'redirect']);
    Route::get('/login/{provider}/callback', [SocialAuthController::class,'callback']);
});

Route::prefix('v1')->middleware(['auth:sanctum'])->group(function() {
    Route::get('/auth/me', [AuthController::class, 'me']);

    Route::get('/auth/logout', [AuthController::class, 'logout']);
});
