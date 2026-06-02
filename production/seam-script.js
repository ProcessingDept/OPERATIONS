import { supabase } from '../assets/js/db-config.js';
console.log("Supabase connection initialized:", supabase);
document.getElementById('seamForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const dataToSave = {
        job_number: document.getElementById('job_number').value,
        inspected_by: document.getElementById('operator_name').value,
        seam_thickness: parseFloat(document.getElementById('seam_thickness').value)
    };

    const { error } = await supabase.from('double_seam_logs').insert([dataToSave]);
    
    if (error) alert('Error: ' + error.message);
    else {
        alert('Success! Record saved.');
        document.getElementById('seamForm').reset();
    }
});
