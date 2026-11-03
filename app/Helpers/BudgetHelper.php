<?php

namespace App\Helpers;

class BudgetHelper
{
    public static function getCategoryAbbreviation($category)
    {
        switch ($category) {
            case 'Maintenance, Operating, and Other Expenses':
                return 'mooe';

            case 'Capital Outlay':
                return 'co';

            case 'Personnel Services':
                return 'ps';

            case 'Financial Expenses':
                return 'fe';

            default:
                return null;
        }
    }
}
