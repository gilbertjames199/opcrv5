<?php

namespace App\Http\Controllers;

use App\Models\UserEmployeeCredential;
use App\Models\UserEmployees;
// use Clockwork\Request\Log;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class UserEmployeesController extends Controller
{
    protected $us_em;
    public function __construct(UserEmployees $us_em)
    {
        $this->us_em = $us_em;
    }
    public function index(Request $request)
    {
        // dd($request);
        $data = $this->us_em->with('Division')->where('department_code', auth()->user()->department_code)
            ->where('active_status', 'ACTIVE')
            ->orderBy('employee_name', 'ASC')
            ->paginate(10);
        return inertia(
            'Users/Employees/Index',
            [
                "users" => $data
            ]
        );
    }

    public function syncemployees(Request $request)
    {
        // $apiUrl = 'http://hris.dvodeoro.ph:91/api/ListOfEmployees4IPCR';

        // $apiUrl = 'http://hrisd:191/api/ListOfEmployees4IPCR';
        // $apiUrl = 'http://192.168.7.49:91/api/ListOfEmployees4IPCR';
        // $apiUrl = 'http://122.53.120.26:89/api/ListOfEmployees4IPCR';
        $apiUrl = 'http://hris.dvodeoro.local:91/api/ListOfEmployees4IPCR';
        // Initialize Guzzle HTTP client
        //$client = new Client();
        $data = [];
        try {
            // Initialize GuzzleHTTP client
            $client = new Client();

            // Make an HTTP POST request to the API URL
            $response = $client->post($apiUrl, [
                // If the API requires any specific data in the request body, you can add it here
                'form_params' => [
                    'key' => 'value',
                    // Add more parameters as needed
                ],
                // If the API requires headers or authentication, you can add them here
                'headers' => [
                    'Authorization' => 'Bearer YOUR_API_TOKEN', // Replace with your API token or credentials
                    // Add more headers if needed
                ],
            ]);

            // Get the JSON response from the API and decode it into an associative array
            $data = json_decode($response->getBody(), true);
            // dd($data);
            //dd($data);
            // Now $data contains the API response as an array, and you can process it as needed
            $length = count($data);
            $mapped_data = [];
            for ($i = 0; $i < $length; $i++) {
                // dd($i);
                $val = $this->saveUserEmployees($data[$i]);
                array_push($mapped_data, $val);
            }
            //dd($mapped_data);
            $chunk_data = array_chunk($mapped_data, 1000);
            foreach ($chunk_data as $key => $value) {
                foreach ($value as $data) {
                    try {
                        $userEmployee = UserEmployees::where('empl_id', $data['empl_id'])->first();
                        if ($userEmployee) {
                            $userEmployee->update($data);
                        } else {
                            UserEmployees::create($data);
                        }
                        $this->saveUserCredentials($data);
                    } catch (\Exception $e) {
                        Log::error('Error updating employee: ' . $e->getMessage());
                    }
                }
            }
        } catch (\Exception $e) {
            // Handle any errors that might occur during the API request
            return Inertia::render('ErrorView', [
                'message' => 'Failed to retrieve data from the API.',
            ]);
        }
        return redirect('/user/employees')
            ->with('message', 'Employee list synced successfully!');
        //dd("done");
    }
    // DB::table('user_employees')->upsert($value,['empl_id']
    // );
    //dd($data[0]['department_code']);
    // For example, return the data using Inertia::render
    // return Inertia::render('YourComponent', [
    //     'data' => $data, // Pass the retrieved data to the view
    // ]);
    public function saveUserEmployees($datum)
    {
        // dd($datum);
        return [
            'empl_id' => $datum['empl_id'],
            'employee_name' => $datum['employee_name'],
            'last_name' => $datum['last_name'],
            'first_name' => $datum['first_name'],
            'middle_name' => $datum['middle_name'],
            'suffix_name' => $datum['suffix_name'],
            'postfix_name' => $datum['postfix_name'],
            'gender' => $datum['gender'],
            'birth_date' => $datum['birth_date'],
            'age' => $datum['age'],
            'department_code' => $datum['department_code'],
            'subdepartment_code' => $datum['subdepartment_code'],
            'division_code' => $datum['division_code'],
            'section_code' => $datum['section_code'],
            'position_code' => $datum['position_code'],
            'position_long_title' => $datum['position_long_title'],
            'position_short_title' => $datum['position_short_title'],
            'position_title1' => $datum['position_title1'],
            'position_title2' => $datum['position_title2'],
            'is_pghead' => $datum['is_pghead'],
            'salary_grade' => $datum['salary_grade'],
            'employment_type' => $datum['employment_type'],
            'employment_type_descr' => $datum['employment_type_descr'],
            'designate_department_code' => $datum['designate_department_code'],
            'active_status' => $datum['active_status'],
            'ao_status' => $datum['ao_tag']
        ];
    }
    public function saveUserCredentials($datum)
    {
        $emplo = UserEmployeeCredential::where('username', $datum['empl_id'])
            ->get();

        if (count($emplo) < 1) {
            $emc = new UserEmployeeCredential;
            $emc->username = $datum['empl_id'];
            $emc->password = md5('password1.');
            $emc->department_code = $datum['department_code'];
            $emc->division_code = $datum['division_code'];
            $emc->save();
        }
    }
    public function saveUser($datum)
    {
        $emplo = UserEmployees::where('empl_id', $datum['empl_id'])
            ->get();
        //dd(count($emplo));
        if (count($emplo) < 1) {
            $emp = new UserEmployees;
            $emp->empl_id = $datum['empl_id'];
            $emp->employee_name = $datum['employee_name'];
            $emp->last_name = $datum['last_name'];
            $emp->first_name = $datum['first_name'];
            $emp->middle_name = $datum['middle_name'];
            $emp->suffix_name = $datum['suffix_name'];
            $emp->postfix_name = $datum['postfix_name'];
            $emp->gender = $datum['gender'];
            $emp->birth_date = $datum['birth_date'];
            $emp->age = $datum['age'];
            $emp->department_code = $datum['department_code'];
            $emp->subdepartment_code = $datum['subdepartment_code'];
            $emp->division_code = $datum['division_code'];
            $emp->section_code = $datum['section_code'];
            $emp->position_code = $datum['position_code'];
            $emp->position_long_title = $datum['position_long_title'];
            $emp->position_short_title = $datum['position_short_title'];
            $emp->position_title1 = $datum['position_title1'];
            $emp->position_title2 = $datum['position_title2'];
            $emp->is_pghead = $datum['is_pghead'];
            $emp->salary_grade = $datum['salary_grade'];
            $emp->employment_type = $datum['employment_type'];
            $emp->employment_type_descr = $datum['employment_type_descr'];
            $emp->save();
        }
    }
}
