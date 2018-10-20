#pragma strict
var ball : GameObject;
var shootPoint : GameObject;
var shootPoint2 : GameObject;
var shootPoint3 : GameObject;
var power : int;
var csScript : Targeting;
var player : GameObject;
var gamestate : GameObject;
var pl : PlayerInfo;
var spellSlider: UnityEngine.UI.Slider;
var spellSliderObject : GameObject;
var temp : Vector3;var step;
var sp : GameObject;var sp2 : GameObject;var sp3 : GameObject;var sp4 : GameObject;var sp5 : GameObject;var sp6 : GameObject;	
function Start () {
 gamestate = GameObject.Find ("GameController");
    pl = gamestate.GetComponent.<PlayerInfo>();

}

function Update () {
	step = power * Time.deltaTime;
    if (Input.GetKeyDown ("2") && csScript.targeted == true) {
        	castArcaneBarrage();
    }
     if(sp!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp.transform.position = Vector3.MoveTowards(sp.transform.position, temp, step);
        }
    }
    if(sp2!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp2.transform.position = Vector3.MoveTowards(sp2.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp2.transform.position = Vector3.MoveTowards(sp2.transform.position, temp, step);
        }
    }
    if(sp3!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp3.transform.position = Vector3.MoveTowards(sp3.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp3.transform.position = Vector3.MoveTowards(sp3.transform.position, temp, step);
        }
    }
    if(sp4!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp4.transform.position = Vector3.MoveTowards(sp4.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp4.transform.position = Vector3.MoveTowards(sp4.transform.position, temp, step);
        }
    }
    if(sp5!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp5.transform.position = Vector3.MoveTowards(sp5.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp5.transform.position = Vector3.MoveTowards(sp5.transform.position, temp, step);
        }
    }
    if(sp6!=null){
    	if(csScript.theTargetedObject.GetComponent(vCharacter).name.Equals("Undertaker")){
    		 temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+1.5f,csScript.theTargetedObject.transform.position.z);
        	sp6.transform.position = Vector3.MoveTowards(sp6.transform.position, temp, step);
    	}
    	else{ temp = new Vector3 (csScript.theTargetedObject.transform.position.x,csScript.theTargetedObject.transform.position.y+3.0f,csScript.theTargetedObject.transform.position.z);
        	sp6.transform.position = Vector3.MoveTowards(sp6.transform.position, temp, step);
        }
    }


}

function castArcaneBarrage(){

var body : Rigidbody;var body2 : Rigidbody;var body3 : Rigidbody;var body4 : Rigidbody;var body5 : Rigidbody;var body6 : Rigidbody;	
    var casted : boolean;		


         	
         if (pl.queryMana() < 200) {
         	Debug.Log ("not enough mana");
            return;
        }
        player.GetComponent (Animator).SetTrigger("ArcaneBarrage");
        pl.adjustMana (-170);
         	for(var i=0;i<=100;i+=20){
         	         spellSliderObject.SetActive(true);
         	spellSlider.value = i;
         	if(i<20){
         	sp = Instantiate (ball,shootPoint.transform.position,Quaternion.identity);
         	Destroy(sp,1.2f);
         	}
         	if(i>20 && i<=40){
         	sp2 = Instantiate (ball,shootPoint2.transform.position,Quaternion.identity);
         	Destroy(sp2,1.2f);
         	}
         	if(i>40 && i<=60){
         	sp3 = Instantiate (ball,shootPoint3.transform.position,Quaternion.identity);
         	Destroy(sp3,1.2f);
         	}
         	if(i>60 && i<=80){
         	sp4 = Instantiate (ball,shootPoint.transform.position,Quaternion.identity);
         	Destroy(sp4,1.2f);
         	}
         	if(i>80 && i<=98){
         	sp5 = Instantiate (ball,shootPoint2.transform.position,Quaternion.identity);
         	Destroy(sp5,1.2f);
         	}
         	if(i>98){
         	sp6 = Instantiate (ball,shootPoint3.transform.position,Quaternion.identity);
         	Destroy(sp6,1.2f);
  //       	body6 = sp6.GetComponent (Rigidbody);
       	//	body6.AddRelativeForce (shootPoint3.transform.forward.normalized * power);
         	}
         		


         			if(spellSlider.value >= 98){
       				      				 
         			}
         		yield WaitForSeconds(0.5f);
         	}
         	spellSliderObject.SetActive(false);
         }
