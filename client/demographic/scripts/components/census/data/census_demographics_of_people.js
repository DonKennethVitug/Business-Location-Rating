{
    "quiz": {
        "Id": 1,
        "codename": "census_demographics_of_people",
        "image": "//geostrategies.com/wp-content/uploads/2013/09/brain2.png",
        "name": "Tell me about yourself",
        "description": "Tell me about yourself Quiz (contains Tell me about yourself etc.)"
    },
    "config":{
        "shuffleQuestions": false,
        "showPager": false,
        "allowBack": true,
        "autoMove": true
    },
    "questions": [{
        "Id": 1010,
        "Name": "Are you a male or female?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "gender", "QuestionId": 1010, "Name": "Male", "value": "male" },
            { "Id": 1056, "codename": "gender", "QuestionId": 1010, "Name": "Female", "value": "female" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "In what age group do you belong?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "ageGroup", "QuestionId": 1010, "Name": "Teen", "value": "teen" },
            { "Id": 1056, "codename": "ageGroup", "QuestionId": 1010, "Name": "Adult", "value": "adult" },
            { "Id": 1057, "codename": "ageGroup", "QuestionId": 1010, "Name": "Senior", "value": "senior" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1012,
        "Name": "How many people living with you in your house?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "household_size", "QuestionId": 1010, "Name": "I'm alone", "value": "1" },
            { "Id": 1056, "codename": "household_size", "QuestionId": 1010, "Name": "about 2-5 people", "value": "2_5" },
            { "Id": 1057, "codename": "household_size", "QuestionId": 1010, "Name": "about 5-10 people", "value": "5_10" },
            { "Id": 1057, "codename": "household_size", "QuestionId": 1010, "Name": "10 and above people", "value": "10_above" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    },
    {
        "Id": 1011,
        "Name": "Did you graduate from highschool?", 
        "QuestionTypeId": 1,
        "Options": [
            { "Id": 1055, "codename": "highscool_graduate", "QuestionId": 1010, "Name": "Yes", "value": "yes" },
            { "Id": 1056, "codename": "highscool_graduate", "QuestionId": 1010, "Name": "No", "value": "no" }],
        "QuestionType": { "Id": 1, "Name": "Multiple Choice", "IsActive": true }
    }]
}