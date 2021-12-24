let descriGeneral = document.getElementById('descri-chimera-gen');
let descriForm = document.getElementById('descri-chimera-form');
let descriSize = document.getElementById('descri-chimera-size');
let descriSkin = document.getElementById('descri-chimera-skin');
let descriHead = document.getElementById('descri-chimera-head');
let descriBonus = document.getElementById('descri-chimera-bonus');
let descriPaws = document.getElementById('descri-chimera-paws');
let descriPawsExtra = document.getElementById('descri-chimera-paws-extra');
let descriTail = document.getElementById('descri-chimera-tail');

let origin = ["du monde des enfers", "du paradis", "d'une région chaude", "d'une région froide", "d'une forêt", "d'un autre monde", "d'une caverne souteraine"];
let form = ['poisson', 'molusque', 'insecte', 'serpent', 'oiseau'];
let size = ['5 centimètres', '30 centimètres', '1 mètre', '3 mètres', '5 mètres', '10 mètres', '30 mètres']
let skin = ['ecailleuse','visqueuse', 'douce' ,'couverte de poils', 'couverte de plumes', 'chitineuse', 'couverte de grosses plaques osseuses', 'translucide'];
let colorskin = ['grise', 'rouge', 'orange', 'jaune', 'verte', 'noir', 'blanche', 'bleu', 'violette', 'rose', 'arc-en-ciel'];
let numberEye = [0, 1, 2, 3, 4, 6, 8];
let sizeEye = ["tout petit", "petit","", "gros"];
let multiSizeEye = ["tout petits", "petits","", "gros"];
let jaw = ['machoire','gueule rempli de dent pointu', 'bouche avec une langue préhensile', 'paire de mandibules', 'bec courbé', 'bec pointu', 'bec plat'];
let sizeJaw = ['très petite', 'petite', '', 'grosse', 'énorme'];
let sizeBeak = ['tout petit', 'petit', '', 'gros', 'énorme'];
let ears = ["petites oreilles", "grandes oreilles", "oreilles touffu", "oreilles en pointes", "oreilles rondes", "oreilles en paraboles", "oreilles dréssées", "oreilles tombantes"];
let horn =["corne torsadée", "corne courbée", "corne en pointe", "longue corne", "corne large", "corne fine", "petite pointe",];
let horns = ["cornes torsadées", "cornes courbées", "cornes en pointes", "longues cornes", "cornes larges", "cornes fines", "petites pointes",];
let tentacle = ['des petites tentacules', 'une petite tentacule', 'des longues tentacules', 'une longue tentacule', 'des grandes tentacules', 'une grande tentacule'];
let pawsLength = [' longues', '', ' petites', ' grandes'];
let pawLength = [' longue', '', ' petite', ' grande'];
let specialpaws = ['tentacule', 'paire d\'ailes', 'nageoires'];
let stylePaws = ['', ' poilus', ' recouvertes de plumes', ' toutes molles', ' très musclées', ' recouvertes de pics', ' recouvertes d\'une petite fourure'];
let stylePaw = ['', ' poilu', ' recouverte de plumes', ' toute molle', ' très musclée', ' recouverte de pics', ' recouverte d\'une petite fourure'];
let ordermix = ['de devant', 'de derrière'];
let stylefinger = ['petits doigts', 'longs doigts', 'doigts', 'griffes', 'petites griffes', 'grosses griffes', 'longues griffes', 'petits doigts griffus', 'gros doigts griffus', 'doigts griffus', 'longs doigts griffus'];
let alterpaws = ['sabots', 'gros sabots', 'petits sabots', 'pinces', 'grosses pinces', 'petites pinces', 'lammes']
let extratentacle = ['des ventouses', 'un dard empoisonné à l\'extremité', 'une pince à l\'extremité', 'une griffe à l\'extremité', 'plusieurs griffes à l\'extremité', 'plusieurs tentacules à l\'extremité', 'plusieurs ventouses à l\'extremité'];
let extratentacles = ['des ventouses', 'un dard empoisonné aux extremité', 'une pince aux extremité', 'une griffe aux extremité', 'plusieurs griffes aux extremité', 'plusieurs tentacules aux extremité', 'plusieurs ventouses aux extremité'];
let tail = ['', ' plate', ' très courte', ' très longue', ' plate', ' avec des épines', ' avec un dard empoisonée', ' couverte de plumes', ' en forme de pointe']
let bonus = ['qu\'une carapace', 'qu\'un aileron sur le dos', 'que la capacité de briller dans le noir'];
let bonus2 = ['une carapace', 'un aileron sur le dos', 'la capacité de briller dans le noir'];

function chimeraCalcul(){
	let randomform1 = Math.floor(Math.random() *form.length);
	let randomform2 = Math.floor(Math.random() *form.length);
	let randomMix = Math.floor(Math.random() *3);
	let randomOrigin = Math.floor(Math.random() *origin.length);
	let randomVarColorskin = Math.floor(Math.random() *5);
	let randomskin = Math.floor(Math.random() *skin.length+1);
	let randomSize = Math.floor(Math.random() *size.length);
	let randomColorskin1 = Math.floor(Math.random() *colorskin.length);
	let randomSizeDirection = Math.floor(Math.random() *2);
	let randomNumEye = Math.floor(Math.random() *numberEye.length);
	let randomJaw = Math.floor(Math.random() *jaw.length);
	let randomSizeJaw = Math.floor(Math.random() *sizeJaw.length);
	let randomBonus = Math.floor(Math.random() *4);
	let ifbonus = Math.floor(Math.random() *3);
	let iftail = Math.floor(Math.random() *2);
	let finalbonus = '';

    descriPaws.style.margin = "0px 0px";
	descriPaws.innerHTML ='';
    descriPawsExtra.style.margin = "0px 0px";
	descriPawsExtra.innerHTML = '';
    descriTail.style.margin = "0px 0px";
	descriTail.innerHTML = '';

	//mixage genetique générale
	descriGeneral.style.margin = "10px 0px";
	descriGeneral.innerHTML = "Voici une créature qui sort " + origin[randomOrigin] + ".";
	if(randomMix == 0){
		descriForm.style.margin = "10px 0px";
		descriForm.innerHTML = "Il a la forme d'un " + form[randomform1] + ".";
	}
	if(randomMix == 1){
		bonusMix();
		function bonusMix(){
			if(randomform1 === randomform2){
				randomform2 = Math.floor(Math.random() *form.length);
				bonusMix();
			}
		}
		descriForm.style.margin = "10px 0px";
		descriForm.innerHTML = "Il ressemble à un mélange entre un " + form[randomform1] + " et un " + form[randomform2] + ".";
	}

	//la taille
	if (randomSizeDirection == 0 || form[randomform1] === 'serpent'){
		descriSize.style.margin = "10px 0px";
		descriSize.innerHTML = "Il mesure aproximativemment " + size[randomSize] + " de long."
	}
	else if (randomSizeDirection == 1){
		descriSize.style.margin = "10px 0px";
		descriSize.innerHTML = "Il mesure aproximativemment " + size[randomSize] + " de haut."
	}

	//la peau
	if(randomskin == skin.length+1){
		if(colorskin[randomColorskin1] == 'arc-en-ciel'){
			descriSkin.style.margin = "10px 0px";
			descriSkin.innerHTML = "Sa peau est de couleur arc-en-ciel.";
		}else{
			if(randomVarColorskin == 0){
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Sa peau est de couleur " + colorskin[randomColorskin1] + ".";
			}
			if(randomVarColorskin == 1){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Sa peau est de couleur " + colorskin[randomColorskin1] + " avec des parties " + colorskin[randomColorskin2] + ".";
			}
			if(randomVarColorskin == 2){
				let randomColorskin2 = "";
				let randomColorskin3 = "";
				randomcolorskin2 ()
				randomcolorskin3 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				function randomcolorskin3 () {
					randomColorskin3 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin3 == randomColorskin1 || randomColorskin3 == randomColorskin2 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin3()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Sa peau est de couleur " + colorskin[randomColorskin1] + " avec des parties " + colorskin[randomColorskin2] + " et " + colorskin[randomColorskin3] + ".";
			}
			if(randomVarColorskin == 3){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Sa peau est zébré, de couleur " + colorskin[randomColorskin1] + " et " + colorskin[randomColorskin2] + ".";
			}
			if(randomVarColorskin == 4){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Sa peau est de couleur " + colorskin[randomColorskin1] + " avec des tâches " + colorskin[randomColorskin2] + ".";
			}
		}
	}
	// si il a une peau particulière
	if(randomskin < skin.length){
		if(colorskin[randomColorskin1] == 'arc-en-ciel'){
			descriSkin.style.margin = "10px 0px";
			descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + ", de couleur arc-en-ciel.";
		}else{
			if(randomVarColorskin == 0){
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + ", de couleur " + colorskin[randomColorskin1] + ".";
			}
			if(randomVarColorskin == 1){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + ", de couleur " + colorskin[randomColorskin1] + " avec des parties " + colorskin[randomColorskin2] + ".";
			}
			if(randomVarColorskin == 2){
				let randomColorskin2 = "";
				let randomColorskin3 = "";
				randomcolorskin2 ()
				randomcolorskin3 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				function randomcolorskin3 () {
					randomColorskin3 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin3 == randomColorskin1 || randomColorskin3 == randomColorskin2 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin3()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + ", de couleur " + colorskin[randomColorskin1] + " avec des parties " + colorskin[randomColorskin2] + " et " + colorskin[randomColorskin3] + ".";
			}
			if(randomVarColorskin == 3){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + " zébrée, de couleur " + colorskin[randomColorskin1] + " et " + colorskin[randomColorskin2] + ".";
			}
			if(randomVarColorskin == 4){
				let randomColorskin2 = "";
				randomcolorskin2 ()
				function randomcolorskin2 () {
					randomColorskin2 = Math.floor(Math.random() *colorskin.length);
					if(randomColorskin2 == randomColorskin1 || colorskin[randomColorskin2] == 'arc-en-ciel'){
						randomcolorskin2()
					}
				}
				descriSkin.style.margin = "10px 0px";
				descriSkin.innerHTML = "Il a une peau " + skin[randomskin] + ", de couleur " + colorskin[randomColorskin1] + " avec des tâches " + colorskin[randomColorskin2] + ".";
			}
		}
	}

	//les yeux et la bouche 
	//si il n'a pas d'yeux
	if (randomNumEye == 0 ){
		if(jaw[randomJaw].includes("bec")){
			descriHead.style.margin = "10px 0px";
			descriHead.innerHTML = "Il n'a pas d'yeux, mais il a un " + sizeBeak[randomSizeJaw] + " " + jaw[randomJaw] + ".";
		}else{
			descriHead.style.margin = "10px 0px";
			descriHead.innerHTML = "Il n'a pas d'yeux, mais il a une " + sizeJaw[randomSizeJaw] + " " + jaw[randomJaw] + ".";
		}

	//si il a un seul oeil
	}else if (randomNumEye == 1){
		let randomSizeEye = Math.floor(Math.random() *sizeEye.length+1);
		if(randomSizeEye == sizeEye.length){
			if(jaw[randomJaw].includes("bec")){
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a un oeil gigantesque et un " + sizeBeak[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}else{
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a un oeil gigantesque et une " + sizeJaw[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}
		}else{
			if(jaw[randomJaw].includes("bec")){
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a un " + sizeEye[randomSizeEye] + " oeil et un " + sizeBeak[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}else{
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a un " + sizeEye[randomSizeEye] + " oeil et une " + sizeJaw[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}
		}

	//si il a plusieurs yeux
	}else if (randomNumEye > 1){
		let randomMulitSizeEye = Math.floor(Math.random() *multiSizeEye.length+1);
		if (randomMulitSizeEye == multiSizeEye.length ){
			if(jaw[randomJaw].includes("bec")){
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a " + numberEye[randomNumEye] + " yeux gigantesques et un " + sizeBeak[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}else{
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a " + numberEye[randomNumEye] + " yeux gigantesques et une " + sizeJaw[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}
		}else{
			if(jaw[randomJaw].includes("bec")){
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a " + numberEye[randomNumEye] + " " + multiSizeEye[randomMulitSizeEye] + " yeux et un " + sizeBeak[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}else{
				descriHead.style.margin = "10px 0px";
				descriHead.innerHTML = "Il a " + numberEye[randomNumEye] + " " + multiSizeEye[randomMulitSizeEye] + " yeux et une " + sizeJaw[randomSizeJaw] + " " + jaw[randomJaw] + ".";
			}
		}
	}

	//bonus sur la tete

	//rien du tout
	if(randomBonus == 0) { 
		let tentacleYN = Math.floor(Math.random() *2);
		if (tentacleYN == 1){
			let randomTentacle = Math.floor(Math.random() *tentacle.length);
			descriBonus.style.margin = "10px 0px";
			descriBonus.innerHTML = "Il a aussi " + tentacle[randomTentacle] + " sur la tête.";
		}
	}

	//oreilles
	if(randomBonus == 1) { 
		let randomEars = Math.floor(Math.random() *ears.length);

		let iftentacle = ""
		let tentacleYN = Math.floor(Math.random() *2);
		if (tentacleYN == 1){
			let randomTentacle = Math.floor(Math.random() *tentacle.length);
			iftentacle = " et " + tentacle[randomTentacle]
		}
		descriBonus.style.margin = "10px 0px";
		descriBonus.innerHTML ="Il a aussi des " + ears[randomEars] + iftentacle + " sur la tête.";
	}

	// cornes
	if(randomBonus == 2) { 
		let ifHorn = "";
		let randomHorn = Math.floor(Math.random() *horn.length)+1;
		if (randomHorn < horn.length){
			let numberHorn = Math.floor(Math.random() *5) + 1;
			if (numberHorn == 1){
				ifHorn = "une " + horn[randomHorn]
			}
			if (numberHorn > 1){
				ifHorn = numberHorn + " " + horns[randomHorn]
			}
		}
		if (randomHorn == horn.length){
			ifHorn = "des bois";
		}
		let iftentacle = "";
		let tentacleYN = Math.floor(Math.random() *2);
		if (tentacleYN == 1){
			let randomTentacle = Math.floor(Math.random() *tentacle.length);
			iftentacle = " et " + tentacle[randomTentacle];
		}
		descriBonus.style.margin = "10px 0px";
		descriBonus.innerHTML ="Il a aussi " + ifHorn + iftentacle + " sur la tête.";
	}

	// oreilles et cornes
	if(randomBonus == 3) { 
		let randomEars = Math.floor(Math.random() *ears.length);
		
		let ifHorn = "";
		let randomHorn = Math.floor(Math.random() *horn.length)+1;
		if (randomHorn < horn.length){
			let numberHorn = Math.floor(Math.random() *5) + 1;
			if (numberHorn == 1){
				ifHorn = "qu'une " + horn[randomHorn]
			}
			if (numberHorn > 1){
				ifHorn = "que " + numberHorn + " " + horns[randomHorn]
			}
		}
		if (randomHorn == horn.length){
			ifHorn = " que des bois";
		}

		let iftentacle = "";
		let tentacleYN = Math.floor(Math.random() *2);
		if (tentacleYN == 1){
			let randomTentacle = Math.floor(Math.random() *tentacle.length);
			iftentacle = " et " + tentacle[randomTentacle];
		}
		descriBonus.style.margin = "10px 0px";
		descriBonus.innerHTML = "Il a aussi des " + ears[randomEars] + ", ainsi " + ifHorn + iftentacle + " sur la tête.";
	}

	//les molusques ont-ils des pattes ?
	let ifMoluskAsPaws = 0;
	if((form[randomform1] == 'molusque') && (randomMix == 0)){
		ifMoluskAsPaws = Math.floor(Math.random() *2);
	}

	//les pattes (sauf pour les serpents pur et les molusques pur qui n'ont pas de patte)
	if(!(form[randomform1] == 'serpent' && (randomMix == 0)) || ifMoluskAsPaws == 1){
		let randomPaws = Math.floor(Math.random() *10);
		let numberPaws = 0;
		let extraRacePaws = "";
		//si c'est insecte, mais qu'il n'a pas de pattes, il a plein de pattes
		if(randomPaws == 0 && (form[randomform1] !== 'insect' || form[randomform2] !== 'insect')){
			numberPaws = 'beaucoup de';
		
		//calcul des nombres de pattes 
		}else{
			switch(randomPaws){
				case 1:
					numberPaws = 2;
					break;

				case 2:
					numberPaws = 3;
					break;

				case 3:
				case 4: 
				case 5: 
				case 6:
					numberPaws = 4;
					break;

				case 7: 
				case 8:
					numberPaws = 6;
					break;

				default:
					numberPaws = 8;
					break;

			}
		}

		//si c'est un insecte, rajoute des ailes
		if(form[randomform1] == 'insect' || form[randomform2] == 'insect'){
			let randomInsectWings = Math.floor(Math.random() *3);
			if(randomInsectWings == 0){
				extraRacePaws = "une paire d'ailes et ";
			}if(randomInsectWings == 1){
				extraRacePaws = "plusieurs paires d'ailes et ";
			}
		}
		//si c'est un oiseau, rajoute des ailes
		if(form[randomform1] == 'oiseau' || form[randomform2] == 'oiseau'){
			let randomBirdWings = Math.floor(Math.random() *3);
			if(extraRacePaws == ""){
				extraRacePaws = "une paire d'ailes  et ";
			}else if(randomBirdWings == 1){
				extraRacePaws = "2 paires d'ailes et ";
			}else if(randomBirdWings == 2){
				extraRacePaws = "3 paires d'ailes  et ";
			}
		}
		// si c'est un poisson, rajoute des nageoires
		if(form[randomform1] == 'poisson' || form[randomform2] == 'poisson'){
			if(extraRacePaws == ""){
				let randomFishFin = Math.floor(Math.random() *3);
				if(randomFishFin == 0){
					extraRacePaws = "une paire de nageoires et ";
				}
				if(randomFishFin == 1){
					extraRacePaws = "deux paires de nageoires et ";
				}
				if(randomFishFin == 2){
					extraRacePaws = "3 paires de nageoires et ";
				}
			}
			else{
				extraRacePaws = "des nageoires, " + extraRacePaws;
			}
		}

		//calcul des pattes
		if(numberPaws > 0){
			let randomPawlength = Math.floor(Math.random() *pawLength.length);
			let ifPawOrTentacle = Math.floor(Math.random() *2);

			//tentacules
			if(ifPawOrTentacle == 0){

				let iftextured = Math.floor(Math.random() *2);
				let texture = '';
				if(iftextured == 1){
					let randomStylePaw = Math.floor(Math.random() *stylePaw.length);
					texture == stylePaw[randomStylePaw];
				}

				let ifextratentacle = Math.floor(Math.random() *2);
				let bonustentacle = '';
				let randomextratentacle = 0
				let randomextratentacles = 0
				if(ifextratentacle ===1){
					if(numberPaws === 1){
						randomextratentacle = Math.floor(Math.random() *extratentacle.length);
						bonustentacle = ' avec ' + extratentacle[randomextratentacle];
					}else{
						randomextratentacles = Math.floor(Math.random() *extratentacles.length);
						bonustentacle = ' avec ' + extratentacles[randomextratentacles];
					}
				}

				//si il y a une seule tentacule
				if(numberPaws == 1){
					descriPaws.style.margin = "10px 0px";
					descriPaws.innerHTML = "Il possède " + extraRacePaws + "une seule " + pawLength[randomPawlength] + " tentacule" + texture + bonustentacle + ".";
				//si il y a plusieurs tentacules
				}else{
					descriPaws.style.margin = "10px 0px";
					descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " tentacules" +  texture + bonustentacle + ".";
				}

				//si il y a un mix des tentacules
				if(numberPaws >= 3){
					let ifmixed = Math.floor(Math.random() *2);
					if(ifmixed === 1){	
						let oneormoretentacle = Math.floor(Math.random() *2);
						if(oneormoretentacle === 0){
							let randomextrabonustentacle = 0

							function extrabonustentacle() {
								randomextrabonustentacle = Math.floor(Math.random() * extratentacles.length)
								if(randomextrabonustentacle === randomextratentacle){
									extrabonustentacle();
								}
							}
							extrabonustentacle()
							descriPawsExtra.style.margin = "10px 0px";
							descriPawsExtra.innerHTML = 'L\'une d\'entre elles possède ' + extratentacle[randomextrabonustentacle] + '.';
						}else{
							let randomextrabonustentacles = 0
							
							function extrabonustentacles() {
								randomextrabonustentacles = Math.floor(Math.random() * extratentacles.length)
								if(randomextrabonustentacles === randomextratentacles){
									extrabonustentacles();
								}
							}
							extrabonustentacles()
							descriPawsExtra.style.margin = "10px 0px";
							descriPawsExtra.innerHTML = 'Mais certaines d\'entre elles possèdent ' + extratentacles[randomextrabonustentacles] + '.';
						}
					}
				}

			//pattes
			}else{
				let numberfinger = Math.floor(Math.random() *5);
				let randomstylefinger = Math.floor(Math.random() * stylefinger.length)
				
				//si il y a une seule patte
				if(numberPaws == 1){
					let randomStylePaw = Math.floor(Math.random() *stylePaw.length);
					descriPaws.style.margin = "10px 0px";
					descriPaws.innerHTML = "Il possède " + extraRacePaws + "une seule " + pawLength[randomPawlength] + " patte" + stylePaw[randomStylePaw] + ' avec ' + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";

				//si il a plus d'une patte
				}else{
					let randomStylePaws = Math.floor(Math.random() *stylePaws.length);
					let mixfinger = 0;

					if (numberPaws >= 4){
						mixfinger = Math.floor(Math.random() *2);
					}

					// si toutes les pattes sont pareils
					if(mixfinger === 0){
						let mixpaws = Math.floor(Math.random() *4);
						let ifspecialpaws = Math.floor(Math.random() *2);
						//si c'est des pattes avec des doigts
						if(ifspecialpaws === 0){
							if(mixpaws === 0){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes" + stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
							}else if(mixpaws === 1){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes avec " + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
							}else if (mixpaws === 2){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes" + stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
							}else{
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes avec " + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
							}
						//si c'est des pattes spéciales
						}else{
							let randomalterpaws = Math.floor(Math.random() *alterpaws.length);
							if(mixpaws === 0){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes " + stylePaws[randomStylePaws] + ' en forme de ' + alterpaws[randomalterpaws] + ".";
							}else if(mixpaws === 1){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes en forme de " + alterpaws[randomalterpaws] + ".";
							}else if (mixpaws === 2){
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes" + stylePaws[randomStylePaws] + ' en forme de ' + alterpaws[randomalterpaws] + ".";
							}else{
								descriPaws.style.margin = "10px 0px";
								descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes en forme de " + alterpaws[randomalterpaws] + ".";
							}
						}

					//si il y a une variété des pattes
					}else{
						let numberextrafinger = 0
						let ifspecialpaws = Math.floor(Math.random() *3);
						let randomstyleextrafinger = 0
						let randomOrdermix =  Math.floor(Math.random() *ordermix.length);
						let mixpaws = Math.floor(Math.random() *2);
						if(mixpaws === 0){
							descriPaws.style.margin = "10px 0px";
							descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes" + stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
						}else if(mixpaws === 1){
							descriPaws.style.margin = "10px 0px";
							descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + pawsLength[randomPawlength] + " pattes avec " + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
						}else if (mixpaws === 2){
							descriPaws.style.margin = "10px 0px";
							descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes" + stylePaws[randomStylePaws] + ' avec ' + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
						}else{
							descriPaws.style.margin = "10px 0px";
							descriPaws.innerHTML = "Il possède " + extraRacePaws + numberPaws + " pattes avec " + (numberfinger + 2) + ' ' + stylefinger[randomstylefinger] + ".";
						}

						//les pattes secondaires
						if(ifspecialpaws === 0){
							function extraFinger (){
								numberextrafinger = Math.floor(Math.random() *5);
								randomstyleextrafinger = Math.floor(Math.random() * stylefinger.length)
								if(numberextrafinger === numberfinger && randomstyleextrafinger === randomstylefinger){
									extraFinger();
								}
							}
							extraFinger()
							if(numberextrafinger !== numberfinger && randomstyleextrafinger !== randomstylefinger){
								descriPawsExtra.style.margin = "10px 0px";
								descriPawsExtra.innerHTML = "Mais les pattes " + ordermix[randomOrdermix] + " ont " + (numberextrafinger + 2) +  ' ' + stylefinger[randomstyleextrafinger] + "."
							}else if(numberextrafinger !== numberfinger && randomstyleextrafinger === randomstylefinger){
								descriPawsExtra.style.margin = "10px 0px";
								descriPawsExtra.innerHTML = "Mais les pattes " + ordermix[randomOrdermix] + " en ont " + (numberextrafinger + 2) +  "."
							}else if(numberextrafinger === numberfinger && randomstyleextrafinger !== randomstylefinger){
								descriPawsExtra.style.margin = "10px 0px";
								descriPawsExtra.innerHTML = "Mais les pattes " + ordermix[randomOrdermix] + " ont des " + stylefinger[randomstyleextrafinger] + "."
							}
						}else if(ifspecialpaws ===1){
							let randomalterpaws = Math.floor(Math.random() *alterpaws.length);
							descriPawsExtra.style.margin = "10px 0px";
							descriPawsExtra.innerHTML = "Mais les pattes " + ordermix[randomOrdermix] + " sont en forme de " + alterpaws[randomalterpaws] + "."
						}else{
							descriPawsExtra.style.margin = "10px 0px";
							descriPawsExtra.innerHTML = "Mais les pattes " + ordermix[randomOrdermix] + " sont des tentacules."
						}
					}
				}
			}
		}
	}

	//si il y a une queue
	if(iftail === 0 || form[randomform1] === 'serpent' || form[randomform2] === 'serpent'){
		let randomtail = Math.floor(Math.random() *tail.length);

		if(ifbonus === 1){
			let randombonus =  Math.floor(Math.random() * bonus.length);
			finalbonus = bonus[randombonus]
		}else if( ifbonus === 2){
			let randombonus =  Math.floor(Math.random() * bonus.length);
			let randomextrabonus =  Math.floor(Math.random() * bonus.length);
			if(randombonus === randomextrabonus){
				finalbonus = bonus[randombonus]
			}else{
				finalbonus = bonus[randombonus] + ' et ' + bonus2[randomextrabonus]
			}
		}
		if(ifbonus === 0){
			descriTail.style.margin = "10px 0px";
			descriTail.innerHTML = 'Il a une queue' + tail[randomtail] + '.';
		}else{
			descriTail.style.margin = "10px 0px";
			descriTail.innerHTML = 'Il a une queue' + tail[randomtail] + ' ainsi ' + finalbonus + '.';
		}

	//pas de queue
	}else{
		if(ifbonus === 1){
			let randombonus =  Math.floor(Math.random() * bonus2.length);
			finalbonus = bonus2[randombonus]
		}else if( ifbonus === 2){
			let randombonus =  Math.floor(Math.random() * bonus2.length);
			let randomextrabonus =  Math.floor(Math.random() * bonus2.length);
			if(randombonus === randomextrabonus){
				finalbonus = bonus2[randombonus]
			}else{
				finalbonus = bonus2[randombonus] + ' et ' + bonus2[randomextrabonus]
			}
		}
		if(ifbonus !== 0){
			descriTail.style.margin = "10px 0px";
			descriTail.innerHTML = 'Il n\'a pas de queue, mais il a ' + finalbonus + '.';
		}else{
			descriTail.style.margin = "10px 0px";
			descriTail.innerHTML = 'Il n\'a pas de queue.';
		}
	}
}