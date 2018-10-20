#pragma strict
var ball : GameObject;
var casted : boolean;
var player : GameObject;
var shootPoint: GameObject;

function Start () {

}

function Update () {
 if (Input.GetKeyDown ("3")) {
        	castFrozenMine();
	}
}
function castFrozenMine(){
 var sp : GameObject;
 sp = Instantiate (ball,shootPoint.transform.position,Quaternion.identity);
     var body : Rigidbody;	
 body = sp.GetComponent (Rigidbody);
 				player.GetComponent (Animator).SetTrigger("FrostBomb");
         		body.AddRelativeForce (shootPoint.transform.up.normalized * 30);
         		if(sp!= null && ball!=null){
            				Destroy(sp,5);
        					}  
 	
}