import { Observable } from "rxjs";

export interface IBaseService {    
    get(): Observable<any[]>;
    post(data: any): Observable<any>;
    put(_id: string, data: any): Observable<any>;
    delete(_id: string): Observable<any>;

    get_single(_id: string): Observable<any>;
}
