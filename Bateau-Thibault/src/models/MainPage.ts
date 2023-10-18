import { CustomButton } from "./customButton";

export class MainPageModel {

    titre :string = "Titre";
    description :string = "Description";

    buttonArray! :CustomButton[];

    constructor(titre: string, description: string, buttonArray :CustomButton[]) {

        this.titre = titre;
        this.description = description;
        this.buttonArray = buttonArray;

    }
}