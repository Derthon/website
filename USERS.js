function check(NAME){
	if (NAME in ACCOUNTS){
		PASS = ACCOUNTS[NAME];
		console.log(PASS)
		return {PASS};
	}
	else {
		return 0;
	};
};


/* Accounts */
var ACCOUNTS = {Brian:"wowz1",Ariel:"",Darrick:"Midknight74"}


