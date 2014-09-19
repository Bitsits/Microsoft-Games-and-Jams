/*
Copyright (c) 2011, comScore Inc. All rights reserved.
version: 4.6.3
*/

COMSCORE.SiteRecruit.Broker.config = {
	version: "4.6.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",

		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/ar/', c: 'inv_c_p86860765-ARAB.js', f: 0.2, p: 0  ,halt: true 	}
	,{m: '//[\\w\\.-]+/athome/(default\\.aspx)?$', c: 'inv_c_3331mt3-Static.js', f: 0.0119, p: 1 	}
	,{m: '//[\\w\\.-]+/athome/', c: 'inv_c_3331mt3.js', f: 0.0119, p: 0 	}
	,{m: '//[\\w\\.-]+/atwork', c: 'inv_c_3331mt5.js', f: 0.0593, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/education/', c: 'inv_c_p15466742-AU-1302.js', f: 0.37, p: 1 	}
	,{m: '//[\\w\\.-]+/australia/windows', c: 'inv_c_p15466742-AU-826-p37131508-AU.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/brasil/((windows/)|(windows7/))', c: 'inv_c_p37131508-Brazil.js', f: 0.047, p: 1 	}
	,{m: '//[\\w\\.-]+/brasil/windows7/($|default\\.aspx$)', c: 'inv_c_p37131508-Brazil_FL-FIX.js', f: 0.0125, p: 2 	}
	,{m: '//[\\w\\.-]+/canada/windows/', c: 'inv_c_p37131508-Canada.js', f: 0.27, p: 1 	}
	,{m: '//[\\w\\.-]+/china/windows/', c: 'inv_c_p37131508-China.js', f: 0.046, p: 1 	}
	,{m: '//[\\w\\.-]+/de/de/(default\\.aspx|$)', c: 'inv_c_p15466742-Germany-HP.js', f: 0.08176, p: 1 	}
	,{m: '//[\\w\\.-]+/de/de/dynamicit/', c: 'inv_c_p15466742-Germany-AP-1137.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/de-de/(default\\.aspx)?$', c: 'inv_c_p86240295-DE-PREVIEW.js', f: 0.9, p: 1 	}
	,{m: '//[\\w\\.-]+/de-de/cloud/', c: 'inv_c_p73639549-Germany.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/downloads/(en/|.*?displaylang=en)', c: 'inv_c_3331mt13_NEW_751-753.js', f: 0.00086, p: 0 	}
	,{m: '//[\\w\\.-]+/dynamics/asmartmove/default\\.mspx', c: 'inv_c_3331mt14-SL-fix_NEW-750.js', f: 0.5, p: 3 	}
	,{m: '//[\\w\\.-]+/en/au/', c: 'inv_c_p15466742-AU-HP-369.js', f: 0.18, p: 1 	}
	,{m: '//[\\w\\.-]+/en/gb/($|default\\.aspx$)', c: 'inv_c_p86240295-EN-GB-HP.js', f: 0.41, p: 1 	}
	,{m: '//[\\w\\.-]+/en/id/', c: 'inv_c_p81712691-EN-ID.js', f: 0.2, p: 1  ,halt: true 	}
	,{m: '//[\\w\\.-]+/en/us/(default\\.aspx|$)', c: 'inv_c_p15394611-US-HP.js', f: 0.274, p: 1 	}
	,{m: '//[\\w\\.-]+/en-gb/($|default\\.aspx)', c: 'inv_c_p86240295-EN-GB-PREVIEW.js', f: 0.9, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/(default\\.aspx)?$', c: 'inv_c_p38796305-EN-US-PREVIEW.js', f: 0.0076, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/cloud/', c: 'inv_c_p80033199-p73639549.js', f: 1, p: 0 	}
	,{m: '//[\\w\\.-]+/en-us/cloud/(#tab2-small|default\\.aspx.*)?$', c: 'inv_c_p80033199.js', f: 1, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/cloud/developer/', c: 'inv_c_p92815173.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/cloud/developer/resource\\.aspx\\?resourceId=ease-the-barriers', c: 'inv_c_p92815173-SL.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/en-us/dynamics/(?!(customersource\\.aspx|partner-login\\.aspx|solution-finder\\.aspx))', c: 'inv_c_3331mt14_NEW-750.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/fr/fr/(default\\.aspx|$)', c: 'inv_c_p15466742-France-HP.js', f: 0.27, p: 1 	}
	,{m: '//[\\w\\.-]+/france/windows/', c: 'inv_c_FR-p15466742_p37131508-Windows.js', f: 0.0948, p: 1 	}
	,{m: '//[\\w\\.-]+/fr-fr/(default\\.aspx|$)', c: 'inv_c_p86240295-FR-PREVIEW-HP.js', f: 0.9, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/branchen/', c: 'inv_c_DE-p15466742-Branchen.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/business/cloudservices/', c: 'inv_c_p15466742-Germany-AP-1135.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/dynamics/', c: 'inv_c_p15466742-Germany-AP-280.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/server(/|$)', c: 'inv_c_DE-wss-p12038685.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/windows(/|$)', c: 'inv_c_DE-p12038685-p37131508-Windows.js', f: 0.062, p: 1 	}
	,{m: '//[\\w\\.-]+/japan/windows(/(?!(downloads/ie/au\\.mspx)|(downloads/ie/iedelete\\.mspx))|$)', c: 'inv_c_JA-p15466742-p37131508-windows.js', f: 0.005, p: 1 	}
	,{m: '//[\\w\\.-]+/korea/windows', c: 'inv_c_p37131508-Korea.js', f: 0.11, p: 1 	}
]
};
COMSCORE.SiteRecruit.Broker.run();