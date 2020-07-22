<?php

namespace Helpers;

use \PDO;
use Helpers\DB as DB;

require_once "config.php";

class VITUG {

	public static $data  =  
	['crime' => 

		['crime_level'  => ['option' => ['very_minor' => 0, 
										 'somewhat_minor' => 0, 
										 'somewhat_serious' => 0, 
										 'very_serious' => 0],
							'rating' => 0,
							'score' => 0
						   ],

		'crime_level_future'  => ['option' => ['decrease' => 0, 
									           'stay_the_same' => 0, 
									           'increase' => 0],
								  'rating' => 0,
								  'score' => 0
								 ],
		'crime_safe_day'  => ['option' => ['very_safe' => 0, 
									       'fairly_safe' => 0, 
									       'moderate' => 0,
									       'a_bit_unsafe' => 0, 
									       'very_unsafe' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_safe_night'  => ['option' => ['very_safe' => 0, 
									       'fairly_safe' => 0, 
									       'moderate' => 0,
									       'a_bit_unsafe' => 0, 
									       'very_unsafe' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_home'  => ['option' => ['not_at_all_worried' => 0, 
									       'a_bit_worried' => 0, 
									       'moderate' => 0,
									       'fairly_worried' => 0, 
									       'very_worried' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_robbed'  => ['option' => ['not_at_all_worried' => 0, 
									       'a_bit_worried' => 0, 
									       'moderate' => 0,
									       'fairly_worried' => 0, 
									       'very_worried' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_physically_attack'  => ['option' => ['not_at_all_worried' => 0, 
									       'a_bit_worried' => 0, 
									       'moderate' => 0,
									       'fairly_worried' => 0, 
									       'very_worried' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_violent'  => ['option' => ['not_a_problem' => 0, 
									       'not_a_very_big_problem' => 0, 
									       'moderate_problem' => 0,
									       'fairly_big_problem' => 0, 
									       'very_big_problem' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_drugs'  => ['option' => ['not_a_problem' => 0, 
									       'not_a_very_big_problem' => 0, 
									       'moderate_problem' => 0,
									       'fairly_big_problem' => 0, 
									       'very_big_problem' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'crime_theft'  => ['option' => ['not_a_problem' => 0, 
									       'not_a_very_big_problem' => 0, 
									       'moderate_problem' => 0,
									       'fairly_big_problem' => 0, 
									       'very_big_problem' => 0],
							  'rating' => 0,
							  'score' => 0
						     ]				     						 
		],

	 'personalities' => 

		['personality_outgoing'  => ['option' => ['not_that_much' => 0, 
												 'less_time' => 0, 
												 'naturally' => 0, 
												 'fairly' => 0, 
												 'most_of_my_time' => 0],
							'rating' => 0,
							'score' => 0
						   ],
		'personality_shy'  => ['option' => ['strongly_disagree' => 0, 
									       'disagree' => 0, 
									       'not_so_sure' => 0,
									       'agree' => 0, 
									       'strongly_agree' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'personality_can_handle_pressure'  => ['option' => ['strongly_disagree' => 0, 
													       'disagree' => 0, 
													       'not_so_sure' => 0,
													       'agree' => 0, 
													       'strongly_agree' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'personality_conversation'  => ['option' => ['strongly_disagree' => 0, 
											       'disagree' => 0, 
											       'not_so_sure' => 0,
											       'agree' => 0, 
											       'strongly_agree' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'personality_curious'  => ['option' => ['strongly_disagree' => 0, 
											       'disagree' => 0, 
											       'not_so_sure' => 0,
											       'agree' => 0, 
											       'strongly_agree' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'personality_conservative'  => ['option' => ['strongly_disagree' => 0, 
											       'disagree' => 0, 
											       'not_so_sure' => 0,
											       'agree' => 0, 
											       'strongly_agree' => 0],
							  'rating' => 0,
							  'score' => 0
						     ]								     						 
		],

	 'expenditure' => 

		['hygiene_products'  => ['option' => ['spend_a_bit' => 0, 
											 'spend_fairly' => 0, 
											 'spend_lot' => 0, 
											 'spend_most' => 0],
							'rating' => 0,
							'score' => 0
						   ],
		'snacks_products'  => ['option' => ['spend_a_bit' => 0, 
									       'spend_fairly' => 0, 
									       'spend_lot' => 0, 
									       'spend_most' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'garments_products'  => ['option' => ['spend_a_bit' => 0, 
										       'spend_fairly' => 0, 
										       'spend_lot' => 0, 
										       'spend_most' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'gadgets_products'  => ['option' => ['spend_a_bit' => 0, 
										       'spend_fairly' => 0, 
										       'spend_lot' => 0, 
										       'spend_most' => 0],
							  'rating' => 0,
							  'score' => 0
						     ],
		'order_online_food'  => ['option' => ['not_at_all' => 0, 
										       'not_that_much' => 0, 
										       'regularly' => 0,
										       'mostly' => 0, 
										       'everytime' => 0],
							  'rating' => 0,
							  'score' => 0
						     ]								     						 
		]

	];

	private static $currentTotal = 0;	

	function getScore($rate) {
		if($rate >= 90) {
			$score = "Very High";
			return $score;
		}
		if($rate >= 70) {
			$score = "High";
			return $score;
		}
		if($rate >= 50) {
			$score = "Medium";
			return $score;
		}
		if($rate >= 20) {
			$score = "Low";
			return $score;
		}
		if($rate > 0) {
			$score = "Very Low";
			return $score;
		}
		if($rate <= 0) {
			$score = "No Data";
			return $score;
		}
	}

	function vitugs_classify_count_rate_algorithm_by_location($inputData, $location) {

		$region = $location['region'];
		$province = $location['province'];
		$city = $location['city'];
		$barangay = $location['barangay'];

		if($region != null && $province == null) {
			$location = "residence_region=$region";
		}

		if($province != null && $city == null) {
			$location = "residence_region=$region, residence_province=$province";
		}

		if($city != null && $barangay == null) {
			$location = "residence_region=$region, residence_province=$province, residence_city=$city";
		}

		if($barangay != null) {
			$location = "residence_region=$region, residence_province=$province, residence_city=$city, residence_barangay=$barangay";
		}

			foreach ($inputData as $title_key => $child) {

				foreach($child as $item_key => $item_array) {

					$dbData = DB::ins()->select_fetch("demographic_census_data", "$item_key", $location); 

					$dbData = json_decode(json_encode($dbData), true);
	
					$option_index = 0; 

					$run_once = false;

					$number_of_contributors = sizeof($dbData);
					
					foreach ($item_array['option'] as $option_key => $option_array) {

						$option_index++;

						$db_index=0;

						foreach($dbData as $db_key => $db_values) { 

							$db_index++;

							$db_value = $db_values[$item_key];

							//remove empty value from count
							if($db_values[$item_key] == "" && $run_once == false) {
								$number_of_contributors--;
								$run_once = true;
							}

							if($db_value == $option_key) {

								self::$data[$title_key][$item_key]['option'][$option_key]++;

								$itemRate = ( 100/sizeof($item_array['option']) ) * ( $option_index );

								self::$currentTotal += $itemRate;
								
							}
							if($option_index >= sizeOf($item_array['option']) &&  $db_index==sizeof($dbData)) {

								$total_item_rating = self::$currentTotal / $number_of_contributors;

								$total_item_rating = round($total_item_rating, 2, PHP_ROUND_HALF_UP);

								self::$data[$title_key][$item_key]['rating'] = $total_item_rating;

								self::$data[$title_key][$item_key]['score'] = self::getScore($total_item_rating);

								self::$currentTotal = 0;

							}  

						} 
						
					}

				}

			}

		return self::$data;
		
	}	

				    	    

	function getCensusData($location){

		$region = $location['region'];
		$province = $location['province'];
		$city = $location['city'];
		$barangay = $location['barangay'];

		self::vitugs_classify_count_rate_algorithm_by_location(self::$data, $region, $province, $city, $barangay);

	}

}

?>