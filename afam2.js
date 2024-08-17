<script>
        // JavaScript to handle course addition and calculations
        document.querySelector('.calculate-btn').addEventListener('click', function() {
            let totalWeightedScore = 0;
            let totalCredits = 0;

            document.querySelectorAll('.course-entry').forEach(function(entry) {
                const creditUnit = parseFloat(entry.querySelector('.credit-unit').value) || 0;
                const gradeScore = parseFloat(entry.querySelector('.grade-score').value) || 0;
                const weightedScore = creditUnit * gradeScore;
                const gpa = (weightedScore / creditUnit) || 0;

                entry.querySelector('.weighted-score').value = weightedScore.toFixed(2);
                entry.querySelector('.gpa').value = gpa.toFixed(2);

                totalWeightedScore += weightedScore;
                totalCredits += creditUnit;
            });

            const cgpa = (totalWeightedScore / totalCredits) || 0;

            document.getElementById('total-weighted-score').textContent = totalWeightedScore.toFixed(2);
            document.getElementById('gpa').textContent = (totalWeightedScore / totalCredits).toFixed(2);
            document.getElementById('cgpa').textContent = cgpa.toFixed(2);
        });
    </script>