import { readFileSync } from 'fs';

export class BaseTest {

    props: any;

    constructor() {
        this.props = this.readPropertiesFile("test/resources/config.properties");
        console.log('Environment: ', this.props);
    }

    getBaseUrl(): string {
        switch (this.props.ENV) {
            case "QA": return this.props.QA_URL;
            case "STAGE": return this.props.STAGE_URL;
            case "PROD": return this.props.PROD_URL;
            default: return "https://default.com";
        }
    }


    // readPropertiesFile(path: string) {
    //     const data = readFileSync(path, 'utf-8'); //It reads the contents of the properties file (like config.properties) from the file system as a UTF-8 encoded string, 'utf-8' tells Node to read the file as a text file, not as a buffer or binary.
    //     return Object.fromEntries(data.split("\n")
    //         .filter(line => line && !line.startsWith('#'))
    //         .map(line => line.split('=')));
    // }

    readPropertiesFile(path: string) {
        const data = readFileSync(path, 'utf-8');
        return Object.fromEntries(
            data.split('\n')
                .filter(line => line && !line.startsWith('#'))
                .map(line => {
                    const [key, value] = line.split('=');
                    return [key.trim(), value.trim()];
                })
        );
    }



}