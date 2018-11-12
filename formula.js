var prompt = require('prompt');


function getCVDRiskLipid(obj){

    // TODO: DOUBLE CHECK FORMULA
    var exponentSum  =
    -0.1795*obj['gender'] + 3.78124*(Math.log10(obj['age'] - 3.853361))
    + 0.007651*(obj['sbp']-129.8673) + 0.625719*obj['hyp'] - 0.00796*obj['hyp']
    * (obj['sbp'] - 129.8673) + 0.11763*(obj['chol']-5.562413) - 0.8183*(obj['hdl']-1.389071)
    + 0.37734*obj['dm']
    + 0.01639*obj['ex'] + 0.29659*obj['curr'] - 0.07043*(obj['cal']-2001.83) + 0.2104*obj['dep']
    + 0.41392*obj['alc'] + 0.10963*obj['t2'] + 0.16388*obj['t3'] + 0.1828*obj['t4']
    + 0.22126*obj['t5'] + 0.11177*obj['bip']
    + 0.21004*obj['oth'] + 0.01526*obj['reg'] + 0.12121*obj['atyp'];

    var S = 0.968011

    var riskscore = 100 * (1 - Math.pow(S, Math.exp(exponentSum)))

    return riskscore;
}






prompt.start();

prompt.get([{
            name: 'gender',
            // 1 if female, 0 if male
            description: 'Gender',
            type: 'string',
            required: true 
        }, {
            name: 'age',
            description: 'Age in years',
            type: 'integer',
            required: true
        }, {
            name: 'sbp',
            description: 'Systolic Blood Pressure in mmHg',
            type: 'integer',
            required: true
        }, {
            name: 'hyp',
            description: 'Use antihypertensives?', // 1 if yes, 0 if no
            type: '',
            required: true
        }, {
            name: 'chol',
            description: 'Total cholesterol in mmol/L',
            type: '',
            required: true
        }, {
            name: 'hdl',
            description: 'HDL cholesterol in mmol/L',
            type: '',
            required: true
        }, {
            name: 'wt',
            description: 'Weight in kg',
            type: '',
            required: true
        }, {
            name: 'ht',
            description: 'Height in cm',
            type: '',
            required: true
        }, {
            name: 'dm',
            description: 'Diabetes?', // 1 if yes, 0 if no
            type: '',
            required: true
        }, {
            name: 'ex',
            description: 'Former smoker?',
            type: '',
            required: true
        }, {
            name: 'curr',
            description: 'Current smoker?',
            type: '',
            required: true
        }, {
            name: 'dep',
            description: 'Use antidepressants?',
            type: '',
            required: true
        }, {
            name: 'alc',
            description: 'History of heavy drinking?',
            type: '',
            required: true
        }, {
            name: 't2',
            description: 'Townsend quintile 2?',
            type: '',
            required: true
        }, {
            name: 't3',
            description: 'Townsend quintile 3?',
            type: '',
            required: true
        }, {
            name: 't4',
            description: 'Townsend quintile 4?',
            type: '',
            required: true
        }, {
            name: 't5',
            description: 'Townsend quintile 5?',
            type: '',
            required: true
        }, {
            name: 'bip',
            description: 'Has bipolar disorder?',
            type: '',
            required: true
        }, {
            name: 'oth',
            description: 'Has psychosis other than schizophrenia or bipolar disorder?',
            type: '',
            required: true
        }, {
            name: 'reg',
            description: 'Unspecified SMI but has been added to SMI register?',
            type: '',
            required: true
        }, {
            name: 'atyp',
            description: 'Use second generation antipsychotics?',
            type: '',
            required: true
        }, {
            name: 'typ',
            description: 'Use first generation antipsychotics?',
            type: '',
            required: true
        }, {
            name: 'cal',
            description: 'Calendar year',
            type: '',
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

