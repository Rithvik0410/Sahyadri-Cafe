document.addEventListener('DOMContentLoaded', () => {
    const tablesContainer = document.querySelector('.tables-container');

    fetch('/seats')
        .then(response => response.json())
        .then(data => {
            generateTables(data);
        });

    function generateTables(seats) {
        for (let i = 0; i < seats.length / 4; i++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('table');
            
            const chairsDivTop = document.createElement('div');
            chairsDivTop.classList.add('chairs');
            
            const chairsDivBottom = document.createElement('div');
            chairsDivBottom.classList.add('chairs');
            
            for (let j = 0; j < 2; j++) {
                const chairTop = document.createElement('i');
                chairTop.classList.add('fa', 'fa-chair');
                if (seats[i * 4 + j]) chairTop.classList.add('red');
                chairsDivTop.appendChild(chairTop);

                const chairBottom = document.createElement('i');
                chairBottom.classList.add('fa', 'fa-chair');
                if (seats[i * 4 + 2 + j]) chairBottom.classList.add('red');
                chairsDivBottom.appendChild(chairBottom);
            }
            
            const tableIcon = document.createElement('i');
            tableIcon.classList.add('fa', 'fa-square');
            
            rowDiv.appendChild(chairsDivTop);
            rowDiv.appendChild(tableIcon);
            rowDiv.appendChild(chairsDivBottom);
            
            tablesContainer.appendChild(rowDiv);
        }
    }
});
