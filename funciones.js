function Serie11() {
    n = 8;
    v = 1;
    x = 1;
    let Ax = [];
    while(v <= n) {
        Ax.push(x)
        console.log(Ax[v-1]);
        if (x==0) x=2;
        x--;
        v++;
    }
    document.getElementById('resultado').innerHTML = Ax;
}
 
 
function Serie1() {
    n = 8;
    v = 1;
    x = -1;
    var resultado = '';
    while(v <= n) {
        resultado += x;
        x = x*-1;
        v++;
    }
    document.getElementById('resultado').innerHTML = resultado;
}
 
function Serie2() {
    n = 8;
    v = 1;
    let Ax = [];
    Ax.push(-1);
    while(v <= n) {
        Ax.push(Ax[v-1]*-1)
        console.log(Ax[v-1]);
        v++;
    }
    Ax.pop();
    document.getElementById('resultado').innerHTML = Ax;
}
 
function Serie3() {
    n = 8;
    v = 1;
    x = 1;
    s = 1;
    let Ax = [];
    while(v <= n) {
        Ax.push(s*x);
        console.log(Ax[v-1]);
        if (x == 2) {
            x = 0;
            s *= -1;
        }
        x++;
        v++;
    }
    document.getElementById('resultado').innerHTML = Ax;
}
 
function Serie4() {
    n = 8;
    v = 1;
    x = 3;
    let Ax = [];
    while(v <= n) {
        Ax.push(x);
        console.log(Ax[v-1]);
        if (x == 5) x = 2;
        x++;
        v++;
    }
    document.getElementById('resultado').innerHTML = Ax;
}
