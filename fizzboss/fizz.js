var n =100;

for (var i = 1; i <= 100; i++) {
    if (i%3 == 0  || i%5 == 0) {
        if (i%5 == 0){
            if (i%3 == 0){
                document.write("n = ","fizz-buss","<br \>");
            }else {
                document.write("n = ","buss","<br \>");
            }
        }else {
            document.write("n = ","fizz","<br \>");
        }
    }else {
        document.write("n = ",i,"<br \>");
    }
}
