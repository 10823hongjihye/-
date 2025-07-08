const studentDB = {
    '3201': { name: '김민준', grade: 3, photo: 'student3.jpg' },
    '2201': { name: '이서연', grade: 2, photo: 'student2.jpg' },
    '1201': { name: '박지후', grade: 1, photo: 'student1.jpg' }
  };
  
  const currentGradeTurn = 2; // 오늘은 2학년 차례
  
  function showScreen(screenName) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenName).classList.remove('hidden');
  }
  
  function scanQR(studentId) {
    const student = studentDB[studentId];
    if (!student) {
      alert('학생 정보를 찾을 수 없습니다.');
      return;
    }
  
    document.getElementById('photo').src = student.photo;
    document.getElementById('name').textContent = student.name;
    document.getElementById('info').textContent = `${student.grade}학년 / ${studentId}`;
    document.getElementById('resultArea').classList.remove('hidden');
    document.getElementById('resultArea').style.borderColor = getColor(student.grade);
  
    const msg = document.getElementById('message');
  
    if (student.grade <= currentGradeTurn) {
      msg.textContent = `✅ ${student.grade}학년 입장 가능합니다. 들어오세요!`;
      msg.style.color = 'green';
    } else {
      msg.textContent = `⛔ 아직 ${student.grade}학년 차례가 아닙니다. 기다려주세요.`;
      msg.style.color = 'red';
    }
  }
  
  function getColor(grade) {
    switch (grade) {
      case 3: return 'navy';
      case 2: return 'orange';
      case 1: return 'lightgray';
      default: return 'gray';
    }
  }
  