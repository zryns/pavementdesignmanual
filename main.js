//listen for submit
document.getElementById("pdm-form").addEventListener('submit', calculateResults);
document.getElementById("pdm-form2").addEventListener('submit', calculateSubGrade);
document.getElementById("pdm-form2").addEventListener('submit', calculatePavement);
//calculate results
function calculateResults(e) {
    console.log('Calculating')

    //Bring in thr UI Variables
    const V = document.getElementById('V');
    const ADT = document.getElementById('ADT');
    const PCV = document.getElementById('PCV');
    const L = document.getElementById('L');
    const T = document.getElementById('T');
    const LEF = document.getElementById('LEF');
    const TGF = document.getElementById('TGF');
    const ESALyi = document.getElementById('ESALyi');
    const ESALdes = document.getElementById('ESALdes');
    const ESALyiFormula = document.getElementById('ESALyiFormula');
    const ESALdesFormula = document.getElementById('ESALdesFormula');



    //Convert number to decimal before displaying results
    const calculateADT = parseFloat(V.value) / 2;
    const calculateESALyi = (parseFloat(ADT.value) * 365 * parseFloat(PCV.value) / 100 * parseFloat(L.value) * parseFloat(T.value) * parseFloat(LEF.value)) / 1000000;
    const calculateESALdes = parseFloat(calculateESALyi) * parseFloat(TGF.value);



    //SHOW RESULT
    ADT.value = calculateADT.toFixed(2);
    ESALyi.value = calculateESALyi.toFixed(3);
    ESALdes.value = calculateESALdes.toFixed(2);
    ESALyiFormula.value = parseFloat(ADT.value) + " * " + 365 + " * " + parseFloat(PCV.value) / 100 + " * " + parseFloat(L.value) + " * " + parseFloat(T.value) + " * " + parseFloat(LEF.value);
    ESALdesFormula.value = parseFloat(ESALyi.value) + " * " + parseFloat(TGF.value);

    e.preventDefault();
}

function calculateSubGrade(f) {
    console.log('Calculating2')

    //Bring in thr UI Variables

    const CBRMean = document.getElementById('CBRMean');
    const CBRSD = document.getElementById('CBRSD');
    const Probability = document.getElementById('Probability');
    const CBR = document.getElementById('CBR');
    const CBRFormula = document.getElementById('CBRFormula');
    const CBRFormula2 = document.getElementById('CBRFormula2');

    //Convert number to decimal before displaying results

    const calculateCBR = parseFloat(CBRMean.value) - parseFloat(Probability.value) * parseFloat(CBRSD.value);


    //SHOW RESULT

    CBR.value = calculateCBR.toFixed(1);
    CBRFormula.value = parseFloat(CBRMean.value) + " - " + parseFloat(Probability.value) + " * " + parseFloat(CBRSD.value) + "";
    CBRFormula2.value = parseFloat(CBRMean.value) + "% - " + (parseFloat(Probability.value) * parseFloat(CBRSD.value)).toFixed(1) + "%";

    f.preventDefault();
}

function calculatePavement(g) {
    console.log('Calculating...')

    const trafficCat = document.getElementById('trafficCat');
    const SubGradeCat = document.getElementById('SubGradeCat');
    const finalType = document.getElementById('finalType');

    finalType.value = (trafficCat.value) + " " + (SubGradeCat.value);

    var showType = document.getElementById("showType");
    var chooseImg = ["T1SG1.jpg", "T1SG2.jpg", "T1SG3.jpg", "T1SG4.jpg",
        "T2SG1.jpg", "T2SG2.jpg", "T2SG3.jpg", "T2SG4.jpg",
        "T3SG1.jpg", "T3SG2.jpg", "T3SG3.jpg", "T3SG4.jpg",
        "T4SG1.jpg", "T4SG2.jpg", "T4SG3.jpg", "T4SG4.jpg",
        "T5SG1.jpg", "T5SG2.jpg", "T5SG3.jpg", "T5SG4.jpg"]

    if (trafficCat.value == "T 1") {

        if (SubGradeCat.value == "SG 1") {
            document.getElementById("showType").src = chooseImg[0];
        }
        else if (SubGradeCat.value == "SG 2") {
            document.getElementById("showType").src = chooseImg[1];
        } else if (SubGradeCat.value == "SG 3") {
            document.getElementById("showType").src = chooseImg[2];
        } else if (SubGradeCat.value == "SG 4") {
            document.getElementById("showType").src = chooseImg[3];
        }
    } else if (trafficCat.value == "T 2") {
        if (SubGradeCat.value == "SG 1") {
            document.getElementById("showType").src = chooseImg[4];
        }
        else if (SubGradeCat.value == "SG 2") {
            document.getElementById("showType").src = chooseImg[5];
        } else if (SubGradeCat.value == "SG 3") {
            document.getElementById("showType").src = chooseImg[6];
        } else if (SubGradeCat.value == "SG 4") {
            document.getElementById("showType").src = chooseImg[7];
        }
    } else if (trafficCat.value == "T 3") {
        if (SubGradeCat.value == "SG 1") {
            document.getElementById("showType").src = chooseImg[8];
        }
        else if (SubGradeCat.value == "SG 2") {
            document.getElementById("showType").src = chooseImg[9];
        } else if (SubGradeCat.value == "SG 3") {
            document.getElementById("showType").src = chooseImg[10];
        } else if (SubGradeCat.value == "SG 4") {
            document.getElementById("showType").src = chooseImg[11];
        }
    } else if (trafficCat.value == "T 4") {
        if (SubGradeCat.value == "SG 1") {
            document.getElementById("showType").src = chooseImg[12];
        }
        else if (SubGradeCat.value == "SG 2") {
            document.getElementById("showType").src = chooseImg[13];
        } else if (SubGradeCat.value == "SG 3") {
            document.getElementById("showType").src = chooseImg[14];
        } else if (SubGradeCat.value == "SG 4") {
            document.getElementById("showType").src = chooseImg[15];
        }
    }else if (trafficCat.value == "T 5") {
        if (SubGradeCat.value == "SG 1") {
            document.getElementById("showType").src = chooseImg[16];
        }
        else if (SubGradeCat.value == "SG 2") {
            document.getElementById("showType").src = chooseImg[16];
        } else if (SubGradeCat.value == "SG 3") {
            document.getElementById("showType").src = chooseImg[17];
        } else if (SubGradeCat.value == "SG 4") {
            document.getElementById("showType").src = chooseImg[18];
        }
    }

    g.preventDefault();


}




var table = document.getElementById("rate");

const TGF = document.getElementById("TGF");
for (var i = 0; i < table.rows.length; i++) {
    // row cells
    for (var j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].onclick = function () {
            rIndex = this.parentElement.rowIndex;
            cIndex = this.cellIndex;
            console.log("Row : " + rIndex + " , Cell : " + cIndex);

            TGF.value = (table.rows[rIndex].cells[cIndex].innerHTML);
            alert(TGF.value + " selected")
        };
    }
}






