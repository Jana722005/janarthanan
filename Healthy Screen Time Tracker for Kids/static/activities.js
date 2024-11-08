document.addEventListener('DOMContentLoaded', () => {
    const scenarios = [
        {
            title: "Meeting a New Friend at the Park",
            image: "https://storage.googleapis.com/lazy-icons/park-friends.webp",
            parentInstructions: "Encourage your child to approach a new friend at the park. Help them practice introducing themselves.",
            childInstructions: "Try saying hello to a new friend and tell them your name!",
            prompts: [
                "Hi, my name is...",
                "Would you like to play together?",
                "What games do you like to play?"
            ]
        },
        {
            title: "Sharing Toys with Siblings",
            image: "https://storage.googleapis.com/lazy-icons/sharing-toys.webp",
            parentInstructions: "Guide your child through the process of sharing toys with others.",
            childInstructions: "Practice sharing your favorite toy and taking turns.",
            prompts: [
                "Would you like to play with my toy?",
                "Can we take turns?",
                "Thank you for sharing with me!"
            ]
        },
        {
            title: "Asking for Help at School",
            image: "https://storage.googleapis.com/lazy-icons/school-help.webp",
            parentInstructions: "Role-play as a teacher and help your child practice asking for help politely.",
            childInstructions: "Practice asking for help when you don't understand something.",
            prompts: [
                "Excuse me, could you help me please?",
                "I don't understand this part...",
                "Thank you for helping me!"
            ]
        }
    ];

    let currentScenarioIndex = 0;

    function updateScenario(index) {
        const scenario = scenarios[index];
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-image').src = scenario.image;
        document.getElementById('parent-instructions').textContent = scenario.parentInstructions;
        document.getElementById('child-instructions').textContent = scenario.childInstructions;
        
        const promptsList = document.getElementById('dialogue-prompts');
        promptsList.innerHTML = '';
        scenario.prompts.forEach(prompt => {
            const li = document.createElement('li');
            li.textContent = prompt;
            promptsList.appendChild(li);
        });
    }

    document.getElementById('next-scenario').addEventListener('click', () => {
        currentScenarioIndex = (currentScenarioIndex + 1) % scenarios.length;
        updateScenario(currentScenarioIndex);
    });

    const reactionButtons = document.querySelectorAll('.reaction-btn');
    reactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            reactionButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
        });
    });

    // Load initial scenario
    updateScenario(currentScenarioIndex);
});