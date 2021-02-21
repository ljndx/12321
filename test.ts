// tests go here; this will not be compiled when this package is used as an extension.
/* tests go here; this will not be compiled when this package is used as a library*/
2
basic.forever(() => {
3
    MCP23017.WritePin(0,85);
4
})