import { supabase } from '../assets/js/db-config.js';

document.getElementById('seamForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Action: Form Submitted, processing data...");

    const dataToSave = {
        job_number: document.getElementById('job_number').value,
        inspected_by: document.getElementById('operator_name').value,
        seam_thickness: parseFloat(document.getElementById('seam_thickness').value)
    };

    console.log("Data Payload:", dataToSave); // This lets you see exactly what is being sent

    const { error } = await supabase.from('double_seam_logs').insert([dataToSave]);
    
    if (error) {
        console.error("Database Error:", error.message);
        alert('Error: ' + error.message);
    } else {
        console.log("Success: Record saved to database");
        alert('Success! Record saved.');
        document.getElementById('seamForm').reset();
    }
});
