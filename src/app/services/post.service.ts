import {Post} from '../post';
import {Subject} from 'rxjs';

export class PostService {

  postSubject =  new Subject<any[]>();

 private POSTS: Post[] = [
    new Post('Mon premier post', 'Vbi curarum abiectis ponderibus aliis tamquam nodum et codicem difficillimum Caesarem convellere nisu valido cogitabat, eique deliberanti cum proximis clandestinis conloquiis et nocturnis qua vi, quibusve commentis id fieret, antequam effundendis rebus pertinacius incumberet confidentia, acciri mollioribus scriptis per simulationem tractatus publici nimis urgentis eundem placuerat Gallum, ut auxilio destitutus sine ullo interiret obstaculo.', 0, 'June 16, 2018 15:24'),
    new Post('Mon deuxième post', 'Tantum autem cuique tribuendum, primum quantum ipse efficere possis, deinde etiam quantum ille quem diligas atque adiuves, sustinere. Non enim neque tu possis, quamvis excellas, omnes tuos ad honores amplissimos perducere, ut Scipio P. Rupilium potuit consulem efficere, fratrem eius L. non potuit. Quod si etiam possis quidvis deferre ad alterum, videndum est tamen, quid ille possit sustinere.', 1, 'June 17, 2018 16:04'),
    new Post('Encore un post', 'Sed laeditur hic coetuum magnificus splendor levitate paucorum incondita, ubi nati sunt non reputantium, sed tamquam indulta licentia vitiis ad errores lapsorum ac lasciviam. ut enim Simonides lyricus docet, beate perfecta ratione vieturo ante alia patriam esse convenit gloriosam.', -1, 'June 18, 2018 12:02')
  ];

  emitPostSubject() {
    this.postSubject.next(this.POSTS.slice());
  }

  addPost(title: string , content: string, loveIts: number, created_at: Date) {
    const postObject = {
      //id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    //postObject.id = this.POSTS[(this.POSTS.length - 1)].id + 1;
    postObject.loveIts = loveIts;
    postObject.created_at = created_at;

    this.POSTS.push(postObject);
    this.emitPostSubject();
  }

  removePost(title: string , content: string, loveIts: number, created_at: Date) {
    const postObject = {
      //id: 0,
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };
    postObject.title = title;
    postObject.content = content;
    //postObject.id = this.POSTS[(this.POSTS.length - 1)].id + 1;
    postObject.loveIts = loveIts;
    postObject.created_at = created_at;

    this.POSTS.splice(2,1,postObject);
    this.emitPostSubject();
  }
}
