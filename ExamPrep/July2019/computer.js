class Computer {
    constructor (ram, cpu, hdd) {
        this.ramMemory = Number(ram);
        this.cpuGHz = Number(cpu);
        this.hddMemory = Number(hdd);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (this.hddMemory - requiredSpace <= 0) {
            throw new Error("There is not enough space on the hard drive");
        }
        let program = {name: name, requiredSpace: requiredSpace};

        this.installedPrograms.push(program);
        this.hddMemory -= requiredSpace;
        return program;
    }

    uninstallAProgram(name) {
        let index = this.checkForProgram(name);

        if (index === -1) {
            throw new Error("Control panel is not responding");
        }

        this.hddMemory += this.installedPrograms[index].requiredSpace;
        this.installedPrograms.splice(index, 1);

        return this.installedPrograms;
    }

    openAProgram(name) {
        let indexInInstalledPrograms = this.installedPrograms.findIndex(progr => progr.name === name);
        let indexInOpenedPrograms = this.taskManager.findIndex(progr => progr.name === name);

        if (indexInInstalledPrograms === -1) {
            throw new Error(`The ${name} is not recognized`)
        }

        if (indexInOpenedPrograms !== -1) {
            throw new Error(`The ${name} is already open`)
        }

        let ramUsage = (this.installedPrograms[indexInInstalledPrograms].requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((this.installedPrograms[indexInInstalledPrograms].requiredSpace / this.cpuGHz) / 500) * 1.5;

        let currentProgram = {
            name,
            ramUsage,
            cpuUsage,
        };

        let usedRamMemory = this.taskManager.reduce((a, b) => (a + b.ramUsage), 0);
        let usedCPU = this.taskManager.reduce((a, b) => (a + b.cpuUsage), 0);

        if (ramUsage + usedRamMemory >= 100) {
            throw new Error(`${name} caused out of memory exception}`)
        }

        if (cpuUsage + usedCPU >= 100) {
            throw new Error(`${name} caused out of cpu exception}`)
        }
        this.taskManager.push(currentProgram);

        return currentProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }
        return this.taskManager
            .map(progr =>
                `Name - ${progr.name} | Usage - CPU: ${progr.cpuUsage.toFixed(0)}%, RAM: ${progr.ramUsage.toFixed(0)}%`).join('\n');
    }

    checkForProgram(name) {
        let list = this.installedPrograms;
        for (let i = 0; i < list.length; i++) {
            if (list[i].name === name) {
                return i;
            }
        }

        return -1;
    }

}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView());


