import { CustomButton } from "./customButton";

export class MainPageModel {

    index :number = -1;
    titre :string = "Titre";
    description :string = "Description";
    buttonArray! :CustomButton[];

    constructor(index :number, titre: string, description: string, buttonArray :CustomButton[]) {

        this.index = index;
        this.titre = titre;
        this.description = description;
        this.buttonArray = buttonArray;

    }
}