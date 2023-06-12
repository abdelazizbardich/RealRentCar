<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Car;
use App\Models\Reservation;
use App\Models\Insurance;

class adminDashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $clients = User::where('role', 'client')->count();
        $admins = User::where('role', 'admin')->count();
        $cars = Car::all();
        $reservations = Reservation::all();
        $insurances = Insurance::all();
        return view('admin.adminDashboard', compact('clients', 'admins', 'cars', 'reservations', 'insurances'));
    }
}
