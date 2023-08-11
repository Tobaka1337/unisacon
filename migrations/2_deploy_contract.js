var Ticket = artifacts.require("Ticket");
var TicketVIP = artifacts.require("TicketVIP");

module.exports = function(deployer) {
  deployer.deploy(Ticket, 'Ticket', 'tickets', '5000');
  deployer.deploy(TicketVIP, 'TicketVIP', 'ticketsVIP', '1000');
};