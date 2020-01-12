class Computer {
    constructor (ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory);
        this.cpuGHz = Number(cpuGHz);
        this.hddMemory = Number(hddMemory);
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {

        if (this.hddMemory - requiredSpace <= 0) {
            throw new Error("There is not enough space on the hard drive");
        }
        this.hddMemory -= requiredSpace;
        const program = {name, requiredSpace};
        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name) {
        let index = this.installedPrograms.findIndex(p => p.name === name);

        if (index === -1) {
            throw new Error("Control panel is not responding");
        }
        this.hddMemory += this.installedPrograms[index].requiredSpace;
        this.installedPrograms.splice(index, 1);
        return this.installedPrograms;
    }

    openAProgram(name) {
        let indexI = this.installedPrograms.findIndex(p => p.name === name);

        if (indexI === -1) {
            throw new Error(`The ${name} is not recognized`);
        }

        let indexT = this.taskManager.findIndex(p => p.name === name);

        if (indexT > -1) {
            throw new Error(`The ${name} is already open`);
        }

        let program = this.installedPrograms[indexI];

        let ramUsage = (program.requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let usedRamMemory = this.taskManager.reduce((a, b) => (a + b.ramUsage), 0);
        let usedCPU = this.taskManager.reduce((a, b) => (a + b.cpuUsage), 0);

        if (usedRamMemory + ramUsage >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (usedCPU + cpuUsage >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let newProgram = {name, ramUsage, cpuUsage};
        this.taskManager.push(newProgram);
        return newProgram;
    }

    taskManagerView() {
        if (this.taskManager.length === 0) {
            throw new Error("All running smooth so far");
        }

        return this.taskManager
            .map(p =>
                `Name - ${p.name} | Usage - CPU: ${p.cpuUsage.toFixed(0)}%, RAM: ${p.ramUsage.toFixed(0)}%`).join('\n');
    }
}

