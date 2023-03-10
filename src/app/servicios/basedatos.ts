import { Injectable} from "@angular/core";
import { AngularFirestore,
    AngularFirestoreDocument,
    AngularFirestoreCollection
 } from '@angular/fire/compat/firestore' ;
 
 import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BasedatosService{

    //se injecta firestore en el constructor
  constructor(public FireStore: AngularFirestore ){

  }

  //funciones de CRUD
 //envio de datos a la BD y enlace de referencia
 
  crearDocument<tipo>(data: tipo,enlace: string){
    const ref = this.FireStore.collection<tipo>(enlace);
    return ref.add(data);
  }
  ///////////////////////
deleteDocument(){

}
///////////////////////
getDocument<tipo>(enlace: string): Observable<tipo[]> {
  const ref = this.FireStore.collection<tipo>(enlace);
  return ref.valueChanges();
}
///////////////////////
editDocument(){

}
///////////////////////

}