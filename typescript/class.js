class MotherBoard {
    constructor(processor, ram, ports, powersupply) {
        this.powersupply = powersupply;
        this.processor = "i7";
        this.ramslot = "8gb";
        this.ports = ['hdmi', 'vga'];
        this.smps = "zebronics";
        this.processor = processor;
        this.ramslot = ram;
        this.ports = ports;
    }
}
class Accessorries extends MotherBoard {
}
class PersonalComputer extends Accessorries {
    constructor(processor, ram, ports, powersupply) {
        super(processor, ram, ports, powersupply);
    }
}
let cpu1 = new MotherBoard("i7", "16gb", ['usb', 'audio'], "smps");
let pc1 = new PersonalComputer("i7", "16gb", ['usb', 'audio'], "smps");
