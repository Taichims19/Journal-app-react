import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dvarhgugm',
  api_key: '973152799578992',
  api_secret: 'YzNMzj4TC-Z5nwThgvmb6z5X_rI',
  secure: true
})


describe('Pruebas en fileUpload', () => { 
  test('debe de subir el archivo correctamente a cloudinary', async() => { 
    
    const imageUrl = 'https://www.questionpro.com/blog/wp-content/uploads/2022/04/1987-test-con-usuarios.jpg';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob],'YuzurihaWaifu.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg','');

   

    const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId],{
      resource_type: 'image'
    });

    console.log({cloudResp});

  },10000);

  test('debe de retornar null', async() => { 

    const file = new File([],'YuzurihaWaifu.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
   },10000)




});