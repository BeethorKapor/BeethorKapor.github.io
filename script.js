// สร้างหัวใจลอย
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️ 🎉';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            document.getElementById('hearts').appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }

        setInterval(createHeart, 300);

        // คำนวณอายุ
        function calculateAge() {
            const birthDate = new Date('2002-10-05'); // 2 ตุลาคม 2545
            const today = new Date();
            const thisYearBirthday = new Date(today.getFullYear(), 9, 5, 20,40, 0); // เดือน 10 = index 9, วันที่ 2, เวลา 10:00
            
            let age = today.getFullYear() - birthDate.getFullYear();
            
            // ถ้ายังไม่ถึงวันเกิดในปีนี้ ให้ลบอายุ 1 ปี
            if (today < thisYearBirthday) {
                age--;
            }
            
            // อัพเดทข้อความแสดงอายุ
            const ageText = document.getElementById('age-text');
            const currentAge = document.getElementById('current-age');
            
            currentAge.textContent = age;
            
            if (today >= thisYearBirthday) {
                ageText.textContent = '🎉 Zoo siab txais tos 🎉';
            } else {
                ageText.textContent = '05/10/2002 - 05/10/' + today.getFullYear();
            }
        }

        // นับถอยหลัง
        let previousDiff = null;
        function updateCountdown() {
            const birthday = new Date('2025-10-05T20:40:00');
            const now = new Date();
            const diff = birthday - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
                
                // เช็คว่าเวลาเปลี่ยนไปหรือไม่ และทำ animation
                if (previousDiff !== null && previousDiff !== diff) {
                    const ageBox = document.getElementById('current-age');
                    ageBox.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        ageBox.style.transform = 'scale(1)';
                    }, 300);
                }
                previousDiff = diff;
            } else {
                document.querySelector('.countdown h2').textContent = '🎉 Happy Brithday Miav Xis 🎉';
                document.getElementById('countdown').innerHTML = '<p style="font-size: 2em; color: #d4407c;">Zoo siab hnub no yog koj hnub yug os ❤️</p>';
                calculateAge(); // อัพเดทอายุใหม่เมื่อถึงวันเกิด
            }
        }

        calculateAge();
        updateCountdown();
        setInterval(updateCountdown, 1000);