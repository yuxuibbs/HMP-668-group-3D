function getCVDRiskLipid(obj){
  //validate
  // var inputvalidation = true;
  // for(var key in obj) {
  // }

  var exponentSum  =
    -0.1795*obj['gen'] + 3.78124*(Math.log10(obj['age'] - 3.853361))

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

// calculating risk from lipid model on sample data
// not sure if the imput for sbp is correct
var inputs = {'gen': 0, 'age': 55, 'sbp': 120/80, 'hyp': 0, 'chol': 0.9, 'hdl': 1.1,
'wt': 68, 'ht': 170.18, 'dm': 1, 'ex': 1, 'curr': 0, 'dep': 1, 'alc': 0,
't2': 0, 't3': 1, 't4': 0, 't5': 0, 'bip': 1, 'oth': 0, 'reg': 0,
'atyp': 0, 'typ': 1, 'cal': 2018};

var output = getCVDRiskLipid(inputs);
console.log(output)
