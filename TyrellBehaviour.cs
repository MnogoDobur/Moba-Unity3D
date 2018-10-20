using UnityEngine;
using System.Collections;
using Invector;

public class TyrellBehaviour : MonoBehaviour {
	public GameObject[] explosions;
	public GameObject visual;
	public GameObject player;

	private bool castedExplosions;
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (this.gameObject.GetComponent<vCharacter> ().currentHealth <= 300 && castedExplosions== false) {
			castedExplosions=true;
			StartCastExplosions();
		}
	}
	IEnumerator castExplosions(){
		for (int i = 0; i < explosions.Length; i++) {
		//	Vector3 tempVector = new Vector3 (explosions [i].transform.position.x, explosions [i].transform.position.y, explosions [i].transform.position.z);
			Vector3 playerLocation = new Vector3(player.transform.position.x,player.transform.position.y,player.transform.position.z);
			//explosions [i].SetActive (true);
			yield return new WaitForSeconds (1.3f);
			//explosions [i].SetActive (false);
			GameObject temp = (GameObject)Instantiate (visual, playerLocation, Quaternion.identity);
			Destroy (temp, 1.3f);
		}
	}
	public void StartCastExplosions(){
		StartCoroutine (castExplosions ());
	}
}
