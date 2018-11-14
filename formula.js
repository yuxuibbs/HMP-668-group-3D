var prompt = require('prompt');


function getCVDRiskLipid(obj){
    var exponentSum  =
        -0.1795 * obj['gender'] 
        + 3.78124 * (Math.log(obj['age']) - 3.853361)
        + 0.007651 * (obj['sbp']-129.8673) 
        + 0.625719 * obj['hyp'] 
        - 0.00796 * obj['hyp'] * (obj['sbp'] - 129.8673)
        + 0.11763 * (obj['chol'] - 5.562413) 
        - 0.8183 * (obj['hdl']-1.389071)
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






prompt.start();

// TODO: CHECK THE TYPES OF EACH INPUT
// apparently there is only one type of number in JS, and it's just... number?
// integer was working as a type but float wasn't

prompt.get([{
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
            description: 'Use antihypertensives? Please enter "true" or "false"', // 1 if yes, 0 if no
            type: 'boolean',
            required: true
        }, {
            name: 'chol',
            description: 'Total cholesterol in mmol/L',
            type: 'number',
            required: true
        }, {
            name: 'hdl',
            description: 'HDL cholesterol in mmol/L',
            type: 'number',
            required: true
        }, {
            name: 'wt',
            description: 'Weight in kg',
            type: 'number',
            required: true
        }, {
            name: 'ht',
            description: 'Height in cm',
            type: 'number',
            required: true
        }, {
            name: 'dm',
            description: 'Diabetes? Please enter "true" or "false"', // 1 if yes, 0 if no
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
            required: true
        }, {
            name: 'cal',
            description: 'Calendar year',
            type: 'number',
            required: true
        }], function (err, result) {

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

    var output = getCVDRiskLipid(inputs);
    console.log(output);
});
