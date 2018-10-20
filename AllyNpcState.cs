using UnityEngine;
using System.Collections;
using Invector;
public class AllyNpcState : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (this.gameObject.transform.GetComponent<v_AICompanion> ().currentState != v_AIMotor.AIStates.Chase) {
			this.gameObject.transform.GetComponent<v_AICompanion> ().currentState = v_AIMotor.AIStates.PatrolSubPoints;
		}
	}
}
