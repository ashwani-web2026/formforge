const firebaseConfig = {
  apiKey: "AIzaSyBiJLamHfmLzNGDoVP1-96hHYEmf4diHtk",
  authDomain: "formforge-22735.firebaseapp.com",
  projectId: "formforge-22735",
  storageBucket: "formforge-22735.firebasestorage.app",
  messagingSenderId: "688939760627",
  appId: "1:688939760627:web:ad2b0838a4b77a4515f086"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
function handleRegistration(event){
  event.preventDefault();
  const form = event.target;
  const inputs = form.querySelectorAll('input, textarea');
  const data = {
    teamName: inputs[0].value,
    captainName: inputs[1].value,
    captainID: inputs[2].value,
    whatsapp: inputs[3].value,
    rosterIDs: inputs[4].value,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  const btn = form.querySelector('button[type="submit"]');
  btn.innerText = "SUBMITTING...";
  btn.disabled = true;
  db.collection("ffmic_2026_registrations").add(data).then(()=>{
    form.classList.add('hidden');
    document.getElementById('registrationSuccess').classList.remove('hidden');
  }).catch((err)=>{
    alert("Error: "+err.message);
    btn.innerText = "Submit Squad Registration";
    btn.disabled = false;
  });
}
function resetRegistrationForm(){
  document.getElementById('communityRegisterForm').reset();
  document.getElementById('communityRegisterForm').classList.remove('hidden');
  document.getElementById('registrationSuccess').classList.add('hidden');
}
