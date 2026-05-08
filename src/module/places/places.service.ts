import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class PlacesService {
  private db = admin.firestore();

  async getAllPlaces() {
    const snapshot = await this.db
      .collection('places')
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getPlacesByType(type: string) {
    const snapshot = await this.db
      .collection('places')
      .where('type', '==', type)
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  async getPlaceById(id: string) {
    const doc = await this.db
      .collection('places')
      .doc(id)
      .get();

    if (!doc.exists) {
      return null;
    }

    return {
      id: doc.id,
      ...doc.data(),
    };
  }

  async getAllProducts() {
    const snapshot = await this.db
      .collection('places')
      .get();

    const products = snapshot.docs.flatMap((doc) => {
      const data = doc.data();

      return data.products || [];
    });

    return [...new Set(products)];
  }

  async searchByProduct(product: string) {
    const normalizedProduct =
      product.toLowerCase();

    const snapshot = await this.db
      .collection('places')
      .where(
        'products',
        'array-contains',
        normalizedProduct,
      )
      .get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
}