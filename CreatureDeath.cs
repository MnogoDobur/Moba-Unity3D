using UnityEngine;
using System.Collections;
using Invector;
public class CreatureDeath : MonoBehaviour {
	public GameObject gameControler;
	private bool dead;
	private float hp;
	public v_AIMotor motor; 
	// Use this for initialization
	void Start () {
		motor = this.gameObject.transform.GetComponent<v_AIMotor>();
		gameControler = GameObject.Find("GameController");
		hp = this.transform.GetComponent<vCharacter> ().maxHealth;
	}
	
	// Update is called once per frame
	void Update () {
		if (hp > this.transform.GetComponent<vCharacter> ().currentHealth) {
		//	this.gameObject.transform.GetComponent<v_AIController> ().SetTargetCustom ();
			motor.currentState = v_AIMotor.AIStates.Chase;
			//if(motor.currentState == v_AIMotor.AIStates.Idle || motor.currentState == v_AIMotor.AIStates.PatrolWaypoints || motor.currentState == v_AIMotor.AIStates.PatrolSubPoints){
			//	motor.currentState = v_AIMotor.AIStates.Chase;
			//}
		}
		if (this.transform.GetComponent<vCharacter> ().currentHealth <= 0 && dead==false) {
			gameControler.GetComponent<PlayerStats> ().xp= gameControler.GetComponent<PlayerStats>().xp +70;
			dead = true;
			Destroy (this.gameObject,3);
			Debug.Log (this.gameObject.name);
		}
	}
}
