document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const step1 = form.querySelector('.step-1');
    const step2 = form.querySelector('.step-2');
    const nextStepBtn = document.getElementById('nextStep');
    const prevStepBtn = document.getElementById('prevStep');
    const profileFeedback = document.getElementById('profileFeedback');
    const feedbackText = profileFeedback.querySelector('p');

    function calculateAge(birthday) {
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    nextStepBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        
        if (!name || !birthday) {
            alert('Please fill in all fields before proceeding.');
            return;
        }
        
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    prevStepBtn.addEventListener('click', () => {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const gender = document.getElementById('gender').value;
        const parentName = document.getElementById('parentName').value;
        const parentContact = document.getElementById('parentContact').value;
        const address = document.getElementById('address').value;
        
        const age = calculateAge(birthday);
        
        let message = `Profile saved successfully! 🎉\n`;
        message += `Name: ${name}\n`;
        message += `Age: ${age} years old\n`;
        message += `Parent/Guardian: ${parentName}\n`;

        feedbackText.innerHTML = message.replace(/\n/g, '<br>');
        profileFeedback.classList.remove('hidden');
        
        // Hide the form after successful submission
        form.classList.add('hidden');
    });
});