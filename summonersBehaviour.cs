using UnityEngine;
using System.Collections;

public class summonersBehaviour : MonoBehaviour {
	public GameObject summonerOne;
	public GameObject summonerTwo;
	public GameObject summonerThree;
	public GameObject summonerFour;
	public GameObject summonerFive;
	// Use this for initialization
	void Start () {
		summonerOne.GetComponent<Animator> ().SetTrigger ("SummonersTrigger");
		summonerTwo.GetComponent<Animator> ().SetTrigger ("SummonersTrigger");
		summonerThree.GetComponent<Animator> ().SetTrigger ("SummonersTrigger");
		summonerFour.GetComponent<Animator> ().SetTrigger ("SummonersTrigger");
		summonerFive.GetComponent<Animator> ().SetTrigger ("SummonersTrigger");

	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
