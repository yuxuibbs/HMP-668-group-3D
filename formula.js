// import prompt module
var prompt = require('prompt');

// lipid model
function getCVDRiskLipid(obj){
    var exponentSum  =  -0.1795 * obj['gender']
                        + 3.78124 * (Math.log(obj['age']) - 3.853361)
                        + 0.007651 * (obj['sbp'] - 129.8673)
                        + 0.625719 * obj['hyp']
                        - 0.00796 * obj['hyp'] * (obj['sbp'] - 129.8673)
                        + 0.11763 * (obj['chol'] - 5.562413)
                        - 0.8183 * (obj['hdl'] - 1.389071)
                        + 0.37734 * obj['dm']
                        + 0.01639 * obj['ex']
                        + 0.29659 * obj['curr']
                        - 0.07043 * (obj['cal'] - 2001.83)
                        + 0.2104 * obj['dep']
                        + 0.41392 * obj['alc']
                        + 0.10963 * obj['t2']
                        + 0.16388 * obj['t3']
                        + 0.1828 * obj['t4']
                        + 0.22126 * obj['t5']
                        + 0.11177 * obj['bip']
                        + 0.21004 * obj['oth']
                        + 0.01526 * obj['reg']
                        + 0.12121 * obj['atyp'];

    var S = 0.968011;

    var riskscore = 100 * (1 - Math.pow(S, Math.exp(exponentSum)));

    return riskscore;
}


// desk model
function getCVDRiskDesk(obj){
    var exponentSum  =  -0.49376 * obj['gender']
                        + 3.50943 * (Math.log(obj['age']) - 3.853361)
                        + 0.00893 * (obj['sbp']-129.8673)
                        + 0.65817264 * obj['hyp']
                        - 0.00888 * obj['hyp'] * (obj['sbp'] - 129.8673)
                        + 0.000680 * (obj['wt'] - 76.20105)
                        - 0.0124 * (obj['ht'] - 167.9494)
                        + 0.44971 * obj['dm']
                        + 0.0738 * obj['ex']
                        + 0.38081 * obj['curr']
                        - 0.07524 * (obj['cal'] - 2001.83)
                        + 0.21846 * obj['dep']
                        + 0.30721 * obj['alc']
                        + 0.10919 * obj['t2']
                        + 0.18412 * obj['t3']
                        + 0.20238 * obj['t4']
                        + 0.24762 * obj['t5']
                        + 0.0978 * obj['bip']
                        + 0.19063 * obj['oth']
                        - 0.01138 * obj['reg']
                        + 0.17662 * obj['atyp']
                        + 0.1205 * obj['typ'];

    var S = 0.951285;

    var riskscore = 100 * (1 - Math.pow(S, Math.exp(exponentSum)));

    return riskscore;
}

console.log("\nWelcome to the PRIMROSE CVD Risk Prediction Calculator!\n");
console.log("===========================================");
console.log("NOTE:\nPlease press the 'return' key on your keyboard when prompted for values that aren't required for a certain model.\n");
console.log("Variables not required for the PRIMROSE lipid model: weight, height, and whether the patient uses first generation antipsychotics.");
console.log("Variables not required for the PRIMROSE BMI model: total cholesterol and HDL cholesterol.\n");
console.log("If you choose to use both the PRIMROSE lipid and BMI models, please enter valid inputs for each item you are prompted for.");
console.log("===========================================\n");

prompt.start();

prompt.get(
    // get user input
        [{
            // ask user which model(s) they want to use
            name: 'model',
            description: 'Would you like to use the PRIMROSE lipid model, BMI model, or both? Please enter "lipid", "bmi", or "both"',
            type: 'string',
            required: true
        },
        // rest of the inputs for the formulas
        {
            name: 'gender',
            // 1 if female, 0 if male
            description: 'Gender. Please enter "true" for female and "false for male',
            type: 'boolean',
            required: true
        }, {
            name: 'age',
            description: 'Age in years',
            type: 'number',
            required: true
        }, {
            name: 'sbp',
            description: 'Systolic Blood Pressure in mmHg',
            type: 'number',
            required: true
        }, {
            name: 'hyp',
            description: 'Use antihypertensives? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'chol',
            description: 'Total cholesterol in mmol/L',
            type: 'number',
            required: false
        }, {
            name: 'hdl',
            description: 'HDL cholesterol in mmol/L',
            type: 'number',
            required: false
        }, {
            name: 'wt',
            description: 'Weight in kg',
            type: 'number',
            required: false
        }, {
            name: 'ht',
            description: 'Height in cm',
            type: 'number',
            required: false
        }, {
            name: 'dm',
            description: 'Diabetes? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'ex',
            description: 'Former smoker? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'curr',
            description: 'Current smoker? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'dep',
            description: 'Use antidepressants? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'alc',
            description: 'History of heavy drinking? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 't2',
            description: 'Townsend quintile 2? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 't3',
            description: 'Townsend quintile 3? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 't4',
            description: 'Townsend quintile 4? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 't5',
            description: 'Townsend quintile 5? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'bip',
            description: 'Has bipolar disorder? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'oth',
            description: 'Has psychosis other than schizophrenia or bipolar disorder? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'reg',
            description: 'Unspecified SMI but has been added to SMI register? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'atyp',
            description: 'Use second generation antipsychotics? Please enter "true" or "false"',
            type: 'boolean',
            required: true
        }, {
            name: 'typ',
            description: 'Use first generation antipsychotics? Please enter "true" or "false"',
            type: 'boolean',
            required: false
        }, {
            name: 'cal',
            description: 'Calendar year',
            type: 'number',
            required: true
        }], function (err, result) {

    // store user inputs
    var inputs = {'gender': result.gender,
                  'age': result.age,
                  'sbp': result.sbp,
                  'hyp': result.hyp,
                  'chol': result.chol,
                  'hdl': result.hdl,
                  'wt': result.wt,
                  'ht': result.ht,
                  'dm': result.dm,
                  'ex': result.ex,
                  'curr': result.curr,
                  'dep': result.dep,
                  'alc': result.alc,
                  't2': result.t2,
                  't3': result.t3,
                  't4': result.t4,
                  't5': result.t5,
                  'bip': result.bip,
                  'oth': result.oth,
                  'reg': result.reg,
                  'atyp': result.atyp,
                  'typ': result.typ,
                  'cal': result.cal
                  };

    // call relevant functions and do some error checking
    if (result.model == "lipid") {
        console.log("\nResults:");
        console.log("PRIMROSE Lipid Risk Prediction: " + getCVDRiskLipid(inputs).toFixed(2) + "%");
    }
    else if (result.model == "bmi") {
        console.log("\nResults:");
        console.log("PRIMROSE BMI Risk Prediction: " + getCVDRiskDesk(inputs).toFixed(2) + "%");
    }
    else if (result.model == "both") {
        console.log("\nResults:");
        console.log("PRIMROSE Lipid Risk Prediction: " + getCVDRiskLipid(inputs).toFixed(2) + "%");
        console.log("PRIMROSE BMI Risk Prediction: " + getCVDRiskDesk(inputs).toFixed(2) + "%");
    }
    else {
        console.log("Invalid input. Exit and start over.")
    }
});
