 const supabaseUrl = "https://kvadlbhdbbfavtomznxy.supabase.co";
 const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2YWRsYmhkYmJmYXZ0b216bnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3NzczNTgsImV4cCI6MjA4MDM1MzM1OH0.SfkKjlNxOv9-l6SksIbs_Mhu2Fhr4W6HrvPHZfJq4to";
 const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

 async function savedata() {
     const name = document.getElementById("name").value;
     const email = document.getElementById("email").value;
     const subject = document.getElementById("subject").value;
     const message = document.getElementById("message").value;

     const {
         error
     } = await supabase
         .from("freelan")
         .insert([{
             name,
             email,
             subject,
             message
         }]);

     if (error) {
         alert("Error: " + error.message);
     } else {
         alert("Message saved successfully!");
     }
 }