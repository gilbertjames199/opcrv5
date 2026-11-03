<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class CheckSoftDeletes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $modelPath = app_path('Models');

        $files = File::allFiles($modelPath);

        foreach ($files as $file) {

            $class = "App\\Models\\" . $file->getFilenameWithoutExtension();

            if (class_exists($class)) {

                $traits = class_uses_recursive($class);

                if (!in_array('Illuminate\Database\Eloquent\SoftDeletes', $traits)) {
                    $this->line($class . " ❌ No SoftDeletes");
                }
            }
        }
    }
}
