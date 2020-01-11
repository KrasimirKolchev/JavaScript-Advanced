function CookingByNumbers(args) {

    let num = Number(args.shift());
    let result = "";

    while (args.length > 0) {
        let cmd = args.shift();

        switch (cmd) {
            case "chop" :
                num /= 2;
                break;
            case "dice" :
                num = Math.sqrt(num);
                break;
            case "spice" :
                num += 1;
                break;
            case "bake" :
                num *= 3;
                break;
            case "fillet" :
                num = (num - (num * 0.2));
                break;

        }
        result += num;
        result += "\n";
    }

    console.log(result.toString());
}

CookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);