{
    "quiz": {
        "Id": 1,
        "codename": "census_information",
        "image": "//cdn3.iconfinder.com/data/icons/pretty-office-part-10-shadow-style/512/Student-id.png",
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
            { "Id": 1055,"codename": "gender", "QuestionId": 1010, "Name": "Male", "value": "male" },
            { "Id": 1056,"codename": "gender", "QuestionId": 1010, "Name": "Female", "value": "female" }],
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
    }]
}