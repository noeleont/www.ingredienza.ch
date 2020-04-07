with import <nixpkgs> {};

stdenv.mkDerivation {
    name = "graphql_backend";
    buildInputs = [
        nodejs-10_x
        yarn
    ];
    shellHook = ''
        export PATH="$PWD/node_modules/.bin/:$PATH"
    '';
}
