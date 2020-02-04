const pi = 3.14;

function mathproblem() {
    var ID = document.getElementById('number').value;

    var answer = ID * pi;

    document.getElementById("answer").innerText = answer;
}