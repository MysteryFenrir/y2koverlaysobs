let currentFollowers = 0;
const goalFollowers = 100;

// Simulación de seguimiento de nuevos seguidores
const simulateNewFollower = () => {
    if (currentFollowers < goalFollowers) {
        currentFollowers += 1;
        updateFollowerGoal();
    }
};

const updateFollowerGoal = () => {
    const progressBar = document.getElementById('progress-bar');
    const currentFollowersElement = document.getElementById('current-followers');
    const goalFollowersElement = document.getElementById('goal-followers');

    const progressPercentage = (currentFollowers / goalFollowers) * 100;
    progressBar.style.width = progressPercentage + '%';

    currentFollowersElement.textContent = currentFollowers;
    goalFollowersElement.textContent = goalFollowers;
};

// Inicializar la meta de seguidores
updateFollowerGoal();

// Simular nuevos seguidores cada 2 segundos
setInterval(simulateNewFollower, 2000);
