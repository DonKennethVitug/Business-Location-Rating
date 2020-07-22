{
    "quiz": {
        "Id": 2,
        "codename": "census_crime",
        "image": "//i608.photobucket.com/albums/tt167/babygirlSNR/misc/Crime.png",
        "name": "How Safe Is Your Residence",
        "description": "How Safe Is Your Place? Quiz (contains safety of the residence etc.)"
    },
    "config":{
        "shuffleQuestions": true,
        "showPager": false,
        "allowBack": true,
        "autoMove": true
    },
    "questions": [{
        "Id": 1010,
        "Name": "How serious you feel the level of crime is?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_level", "QuestionId": 1010, "Name": "Very Minor", "value": "very_minor" },
            { "Id": 1056, "codename": "crime_level", "QuestionId": 1010, "Name": "Somewhat Minor", "value": "somewhat_minor" },
            { "Id": 1057, "codename": "crime_level", "QuestionId": 1010, "Name": "Somewhat Serious", "value": "somewhat_serious" },
            { "Id": 1058, "codename": "crime_level", "QuestionId": 1010, "Name": "Very Serious", "value": "very_serious" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "How safe do you feel walking alone in this city during the daylight? ", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1059, "codename": "crime_safe_day", "QuestionId": 1010, "Name": "Very Safe", "value": "very_safe" },
            { "Id": 1061, "codename": "crime_safe_day", "QuestionId": 1010, "Name": "Fairly Safe", "value": "fairly_safe" },
            { "Id": 1061, "codename": "crime_safe_day", "QuestionId": 1010, "Name": "Moderate", "value": "moderate" },
            { "Id": 1062, "codename": "crime_safe_day", "QuestionId": 1010, "Name": "A Bit Unsafe", "value": "a_bit_unsafe" },
            { "Id": 1063, "codename": "crime_safe_day", "QuestionId": 1010, "Name": "Very Unsafe", "value": "very_unsafe" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1012,
        "Name": "How safe do you feel walking alone in this city during the night? ", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1064, "codename": "crime_safe_night", "QuestionId": 1010, "Name": "Very Safe", "value": "very_safe" },
            { "Id": 1065, "codename": "crime_safe_night", "QuestionId": 1010, "Name": "Fairly Safe", "value": "fairly_safe" },
            { "Id": 1066, "codename": "crime_safe_night", "QuestionId": 1010, "Name": "Moderate", "value": "moderate" },
            { "Id": 1067, "codename": "crime_safe_night", "QuestionId": 1010, "Name": "A Bit Unsafe", "value": "a_bit_unsafe" },
            { "Id": 1068, "codename": "crime_safe_night", "QuestionId": 1010, "Name": "Very Unsafe", "value": "very_unsafe" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1013,
        "Name": "In the past three years, what would you think the level of crime in your community?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1069, "codename": "crime_level_future", "QuestionId": 1010, "Name": "had decreased", "value": "decrease" },
            { "Id": 1070, "codename": "crime_level_future", "QuestionId": 1010, "Name": "stays the same", "value": "stay_the_same" },
            { "Id": 1071, "codename": "crime_level_future", "QuestionId": 1010, "Name": "had increased", "value": "increase" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "How worried are you about....having your home broken into and something stolen?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_home", "QuestionId": 1010, "Name": "Not at all Worried", "value": "not_at_all_worried" },
            { "Id": 1056, "codename": "crime_home", "QuestionId": 1010, "Name": "A Bit Worried", "value": "a_bit_worried" },
            { "Id": 1057, "codename": "crime_home", "QuestionId": 1010, "Name": "Moderate", "value": "moderate" },
            { "Id": 1057, "codename": "crime_home", "QuestionId": 1010, "Name": "Fairly worried", "value": "fairly_worried" },
            { "Id": 1057, "codename": "crime_home", "QuestionId": 1010, "Name": "Very worried", "value": "very_worried" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "(How worried are you about)......being mugged and robbed?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_robbed", "QuestionId": 1010, "Name": "Not at all Worried", "value": "not_at_all_worried" },
            { "Id": 1056, "codename": "crime_robbed", "QuestionId": 1010, "Name": "A Bit Worried", "value": "a_bit_worried" },
            { "Id": 1057, "codename": "crime_robbed", "QuestionId": 1010, "Name": "Moderate", "value": "moderate" },
            { "Id": 1057, "codename": "crime_robbed", "QuestionId": 1010, "Name": "Fairly worried", "value": "fairly_worried" },
            { "Id": 1057, "codename": "crime_robbed", "QuestionId": 1010, "Name": "Very worried", "value": "very_worried" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "(How worried are you about)......being physically attacked by strangers?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_physically_attack", "QuestionId": 1010, "Name": "Not at all Worried", "value": "not_at_all_worried" },
            { "Id": 1056, "codename": "crime_physically_attack", "QuestionId": 1010, "Name": "A Bit Worried", "value": "a_bit_worried" },
            { "Id": 1057, "codename": "crime_physically_attack", "QuestionId": 1010, "Name": "Moderate", "value": "moderate" },
            { "Id": 1057, "codename": "crime_physically_attack", "QuestionId": 1010, "Name": "Fairly worried", "value": "fairly_worried" },
            { "Id": 1057, "codename": "crime_physically_attack", "QuestionId": 1010, "Name": "Very worried", "value": "very_worried" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "(How much of a problem are…) violent crimes such as assault and armed robbery?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_violent", "QuestionId": 1010, "Name": "Not a Problem at All", "value": "not_a_problem" },
            { "Id": 1056, "codename": "crime_violent", "QuestionId": 1010, "Name": "Not a Very Big Problem", "value": "not_a_very_big_problem" },
            { "Id": 1057, "codename": "crime_violent", "QuestionId": 1010, "Name": "Moderate Problem", "value": "moderate_problem" },
            { "Id": 1057, "codename": "crime_violent", "QuestionId": 1010, "Name": "Fairly Big Problem", "value": "fairly_big_problem" },
            { "Id": 1057, "codename": "crime_violent", "QuestionId": 1010, "Name": "Very Big Problem", "value": "very_big_problem" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "(How much of a problem are…) people using or dealing drugs? ", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_drugs", "QuestionId": 1010, "Name": "Not a Problem at All", "value": "not_a_problem" },
            { "Id": 1056, "codename": "crime_drugs", "QuestionId": 1010, "Name": "Not a Very Big Problem", "value": "not_a_very_big_problem" },
            { "Id": 1057, "codename": "crime_drugs", "QuestionId": 1010, "Name": "Moderate Problem", "value": "moderate_problem" },
            { "Id": 1057, "codename": "crime_drugs", "QuestionId": 1010, "Name": "Fairly Big Problem", "value": "fairly_big_problem" },
            { "Id": 1057, "codename": "crime_drugs", "QuestionId": 1010, "Name": "Very Big Problem", "value": "very_big_problem" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "(How much of a problem are…) property crimes such as vandalism and theft? ", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "crime_theft", "QuestionId": 1010, "Name": "Not a Problem at All", "value": "not_a_problem" },
            { "Id": 1056, "codename": "crime_theft", "QuestionId": 1010, "Name": "Not a Very Big Problem", "value": "not_a_very_big_problem" },
            { "Id": 1057, "codename": "crime_theft", "QuestionId": 1010, "Name": "Moderate Problem", "value": "moderate_problem" },
            { "Id": 1057, "codename": "crime_theft", "QuestionId": 1010, "Name": "Fairly Big Problem", "value": "fairly_big_problem" },
            { "Id": 1057, "codename": "crime_theft", "QuestionId": 1010, "Name": "Very Big Problem", "value": "very_big_problem" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    }]
}